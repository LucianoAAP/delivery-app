import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { CheckoutItensContainer, H1,
  TotalContainer, PaperDiv, ClearButton, Div } from './styles';
import { getPrice } from '../../utils/formatManipulation';
import useCheckoutTable from '../../hooks/useCheckoutTable';

const CheckoutItemlist = () => {
  const { totalPrice, removeFromCart, tableHeaderItens,
    cartState, clearStorageCart, getDataTestId } = useCheckoutTable();

  return (
    <CheckoutItensContainer>
      <Div>
        <H1>Finalizar Pedido</H1>
        <ClearButton
          type="button"
          onClick={ () => clearStorageCart() }
        >
          Apagar carrinho
        </ClearButton>
      </Div>
      <PaperDiv elevation={ 3 }>
        <Table size="medium">
          <TableHead>
            <TableRow>
              {tableHeaderItens.map((e) => <TableCell key={ e }>{e}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {cartState
              ? cartState.map((e, index) => (
                <TableRow key={ e.id }>
                  <TableCell data-testid={ getDataTestId('number', index) }>
                    {index + 1}
                  </TableCell>
                  <TableCell data-testid={ getDataTestId('name', index) }>
                    {e.name}
                  </TableCell>
                  <TableCell data-testid={ getDataTestId('quantity', index) }>
                    {e.quantity}
                  </TableCell>
                  <TableCell data-testid={ getDataTestId('unitPrice', index) }>
                    {getPrice(e.price)}
                  </TableCell>
                  <TableCell data-testid={ getDataTestId('subTotal', index) }>
                    {getPrice(e.price * e.quantity)}
                  </TableCell>
                  <TableCell data-testid={ getDataTestId('remove', index) }>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={ () => removeFromCart(e.id) }
                    >
                      Remover
                    </Button>
                  </TableCell>
                </TableRow>
              )) : null}
          </TableBody>
        </Table>
      </PaperDiv>
      <TotalContainer>
        <h1
          data-testid={ getDataTestId('totalPrice') }
        >
          {`Total: ${totalPrice}`}
        </h1>
      </TotalContainer>
    </CheckoutItensContainer>
  );
};

export default CheckoutItemlist;
