import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { CheckoutItensContainer, H1, TotalContainer, PaperDiv } from './styles';
import { getPrice } from '../../utils/formatManipulation';
import useCheckoutTable from '../../hooks/useCheckoutTable';

const CheckoutItemlist = () => {
  const { totalPrice, removeFromCart, tableHeaderItens, cartState } = useCheckoutTable();

  return (
    <CheckoutItensContainer>
      <H1>Finalizar Pedido</H1>
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
                  <TableCell
                    data-testid="customer_checkout__element-order-table-item-number-"
                  >
                    {index + 1}
                  </TableCell>
                  <TableCell
                    data-testid="customer_checkout__element-order-table-name-"
                  >
                    {e.name}
                  </TableCell>
                  <TableCell
                    data-testid="customer_checkout__element-order-table-quantity-"
                  >
                    {e.quantity}
                  </TableCell>
                  <TableCell
                    data-testid="customer_checkout__element-order-table-unit-price-"
                  >
                    {getPrice(e.price)}
                  </TableCell>
                  <TableCell
                    data-testid="customer_checkout__element-order-table-sub-total-"
                  >
                    {getPrice(e.price * e.quantity)}
                  </TableCell>
                  <TableCell
                    data-testid="customer_checkout__element-order-table-remove-"
                  >
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
          data-testid="customer_checkout__element-order-total-price"
        >
          {`Total: ${totalPrice}`}
        </h1>
      </TotalContainer>
    </CheckoutItensContainer>
  );
};

export default CheckoutItemlist;
