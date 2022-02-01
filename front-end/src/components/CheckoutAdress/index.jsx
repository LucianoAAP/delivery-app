import React from 'react';
import useConfirmOrder from '../../hooks/useConfirmOrder';
import { ConfirmContainer,
  PaperDiv,
  Label,
  ConfirmButton,
  Form,
  SelectSeller,
  H1,
  MapIcon } from './styles';

const CheckoutConfirm = () => {
  const { handleChange, sellers, disabledBtn, submitSale, bodyInfo } = useConfirmOrder();

  return (
    <ConfirmContainer>
      <H1>Detalhes e Endereço para Entrega</H1>
      <PaperDiv elevation={ 3 }>
        <MapIcon />
        <Form>
          <Label htmlFor="seller-field">
            P. Vendedora Responsável:
            <SelectSeller
              name="sellerId"
              data-testid="customer_checkout__select-seller"
              id="seller-field"
              onClick={ ({ target }) => handleChange(target) }
              value={ bodyInfo.sellerId }
            >
              {
                sellers
                  ? sellers.map(
                    (e) => (
                      <option
                        key={ e.id }
                        value={ e.id }
                      >
                        {e.name}
                      </option>),
                  )
                  : null
              }
            </SelectSeller>
          </Label>
          <Label htmlFor="adress-field">
            Endereço
            <input
              name="deliveryAddress"
              data-testid="customer_checkout__input-address"
              type="text"
              id="adress-field"
              placeholder="Av Pedro Tafarel Perereira"
              onChange={ ({ target }) => handleChange(target) }
              value={ bodyInfo.deliveryAddress }
            />
          </Label>
          <Label htmlFor="number-field">
            Número
            <input
              name="deliveryNumber"
              data-testid="customer_checkout__input-addressNumber"
              type="number"
              id="number-field"
              placeholder="582"
              onChange={ ({ target }) => handleChange(target) }
              value={ bodyInfo.deliveryNumber }
            />
          </Label>
        </Form>
        <ConfirmButton
          data-testid="customer_checkout__button-submit-order"
          type="button"
          onClick={ () => submitSale() }
          disabled={ disabledBtn }
        >
          FINALIZAR PEDIDO
        </ConfirmButton>
      </PaperDiv>
    </ConfirmContainer>
  );
};

export default CheckoutConfirm;
