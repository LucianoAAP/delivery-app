import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';
import { CustomerCheckout } from '../../pages';
import { customerUserInfoMock } from './mocks/localStorageMock';
import usersAPI from './mocks/usersMock';
import { act } from 'react-dom/test-utils';
import cartItens from './mocks/checkoutMocks';
import userEvent from '@testing-library/user-event';
import getUsers from '../../services/getUsers';
import getSellers from '../../services/getSellers';
import createSale from '../../services/createSale';
import getSalesFromCustomer from '../../services/getSalesFromCustomer';
import sellersMock from './mocks/sellersMock';
import customerOrdersMock from './mocks/ordersMock';
jest.mock('../../services/getUsers');
jest.mock('../../services/getSellers');
jest.mock('../../services/createSale');
jest.mock('../../services/getSalesFromCustomer');

jest.mock('socket.io-client', () => jest.fn(() => ({
  emit: jest.fn(),
  on: jest.fn(),
})));

describe('Testa pagina de checkout do consumidor:', () => {

  beforeEach(() => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockImplementation(customerUserInfoMock);

    getUsers.mockResolvedValue(usersAPI);
    getSellers.mockResolvedValue(sellersMock)
  })

  describe('Tabela dos itens presentes do carrinho de compras', () => {

    beforeEach(async () => {
      await act( async () => renderWithReduxAndRouter(<CustomerCheckout />, {initialState: cartItens}));
    })

    it('Os itens do estado são renderizados no carrinho de compras' , () => {
      const item1Name = screen.getByTestId('customer_checkout__element-order-table-name-0')
      const item1Quantity = screen.getByTestId('customer_checkout__element-order-table-quantity-0')
      const item2Name = screen.getByTestId('customer_checkout__element-order-table-name-1')
      const item2Quantity = screen.getByTestId('customer_checkout__element-order-table-quantity-1')
      expect(item1Name).toBeDefined()
      expect(item1Name.innerHTML).toBe("Skol Lata 250ml")
      expect(item1Quantity.innerHTML).toBe("7")
      expect(item2Name).toBeDefined()
      expect(item2Name.innerHTML).toBe("Heineken 600ml")
      expect(item2Quantity.innerHTML).toBe("6")
    })

    it('O carrinho contém um elemento informando o valor total da compra', () => {
      const totalPrice = screen.getByTestId('customer_checkout__element-order-total-price')
      expect(totalPrice).toBeDefined()
      expect(totalPrice.innerHTML).toBe('Total: R$ 123,39')
    })

    it('O botão de exclusão de um item exclui-o com todas suas quantidades do carrinho', () => {
      const item1Name = screen.getByTestId('customer_checkout__element-order-table-name-0')
      expect(item1Name).toBeDefined()
      const rmButton = screen.getAllByRole('button', {name: "Remover"} )
      userEvent.click(rmButton[0])
      expect(rmButton[0]).not.toBeInTheDocument()
      expect(item1Name).not.toBeInTheDocument()
    })

    it('Após excluir um item o valor total é atualizado', async () => {
      const item1Name = screen.getByTestId('customer_checkout__element-order-table-name-0')
      expect(item1Name).toBeDefined()
      const rmButton = screen.getAllByRole('button', {name: "Remover"} )
      const totalPrice = screen.getByTestId('customer_checkout__element-order-total-price')
      expect(totalPrice).toBeDefined()
      expect(totalPrice.innerHTML).toBe('Total: R$ 123,39')
      userEvent.click(rmButton[0])
      expect(rmButton[0]).not.toBeInTheDocument()
      expect(item1Name).not.toBeInTheDocument()
      await waitFor(() => expect(totalPrice.innerHTML).toBe('Total: R$ 107,99')) 
    })

    it('Botão de apagar carrinho, remove TODOS os itens do carrinho', async () => {
      const item1Name = screen.queryByTestId('customer_checkout__element-order-table-name-0')
      const item7Name = screen.queryByTestId('customer_checkout__element-order-table-name-6')
      expect(item1Name).toBeInTheDocument()
      expect(item7Name).toBeInTheDocument()
      const rmCartButton = screen.getByRole('button', {name: /apagar carrinho/i})
      expect(rmCartButton).toBeInTheDocument()
      userEvent.click(rmCartButton)
      const confirmRm = screen.getByRole('button', {name: /sim/i})
      await waitFor(() => userEvent.click(confirmRm))
      const okButton = screen.getByRole('button', {name: /ok/i})
      await waitFor(() => userEvent.click(okButton))
      const totalPrice = screen.getByTestId('customer_checkout__element-order-total-price')
      await waitFor(() => expect(totalPrice.innerHTML).toBe('Total: R$ 0,00'))
      expect(item1Name).not.toBeInTheDocument()
      expect(item7Name).not.toBeInTheDocument()
    })
  })

  describe('Confirmação de compra no formulário', () => {

    beforeEach(async () => {
      createSale.mockResolvedValue({ data: customerOrdersMock[0] });
      getSalesFromCustomer.mockResolvedValue(customerOrdersMock);
      await act( async () => renderWithReduxAndRouter(<CustomerCheckout />, {initialState: cartItens}));
    })

    it('O botão de confirmar compra está desativado', () => {
      const confirmButton = screen.getByRole('button', {
        name: /finalizar pedido/i
      })
      expect(confirmButton).toBeInTheDocument()
      expect(confirmButton).toHaveProperty('disabled', true)
    })

    it('Após preencher o formulário de endereço o botão de confirmar fica ativo', () => {
      const confirmButton = screen.getByRole('button', {
        name: /finalizar pedido/i
      })
      expect(confirmButton).toBeInTheDocument()
      expect(confirmButton).toHaveProperty('disabled', true)
      const selectSeller = screen.getByRole('combobox', {
        name: /p\. vendedora responsável:/i
      })
      const inputAddress = screen.getByRole('textbox', {
        name: /endereço/i
      })
      const inputNumber = screen.getByRole('spinbutton', {
        name: /número/i
      })
      userEvent.selectOptions(selectSeller, ["2"])
      userEvent.type(inputAddress, 'Av Aurellion Mid')
      userEvent.type(inputNumber, "911")
      expect(confirmButton).toHaveProperty('disabled', false)
    })

    it('Finalizando a compra o usuário é redirecionado para "/customer/orders/1"', async () => {
      const confirmButton = screen.getByRole('button', {
        name: /finalizar pedido/i
      })
      const selectSeller = screen.getByRole('combobox', {
        name: /p\. vendedora responsável:/i
      })
      const inputAddress = screen.getByRole('textbox', {
        name: /endereço/i
      })
      const inputNumber = screen.getByRole('spinbutton', {
        name: /número/i
      })
      userEvent.selectOptions(selectSeller, ["2"])
      userEvent.type(inputAddress, 'Av Aurellion Mid')
      userEvent.type(inputNumber, "911")
      userEvent.click(confirmButton)
      await waitFor(() => expect(window.location.pathname).toBe('/customer/orders/1'))
      const products = screen.getByRole('button', {
        name: /produtos/i
      })
      userEvent.click(products)
      await waitFor(() => expect(window.location.pathname).toBe('/customer/products'))
    })

  })


});
