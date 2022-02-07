import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { getPrice } from '../../utils/formatManipulation';

const { arrayOf, shape, string, number } = PropTypes;

const getDataTestId = (key, index, userRole) => {
  const order = index + 1;

  const dataTestIds = {
    number: `${userRole}_order_details__element-order-table-item-number-${order}`,
    name: `${userRole}_order_details__element-order-table-name-${order}`,
    quantity: `${userRole}_order_details__element-order-table-quantity-${order}`,
    unitPrice: `${userRole}_order_details__element-order-table-unit-price-${order}`,
    subTotal: `${userRole}_order_details__element-order-table-sub-total-${order}`,
  };

  return dataTestIds[key];
};

const ProductsTable = ({ products, userRole }) => (
  <Table size="medium">
    <TableHead>
      <TableRow>
        <TableCell>Item</TableCell>
        <TableCell>Descrição</TableCell>
        <TableCell>Quantidade</TableCell>
        <TableCell>Valor Unitário</TableCell>
        <TableCell>Sub-total</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      { products.map(({ name, orderInfo: { quantity }, price }, index) => (
        <TableRow key={ `product-${index}` }>
          <TableCell data-testid={ getDataTestId('number', index, userRole) }>
            { index + 1 }
          </TableCell>
          <TableCell data-testid={ getDataTestId('name', index, userRole) }>
            { name }
          </TableCell>
          <TableCell data-testid={ getDataTestId('quantity', index, userRole) }>
            { quantity }
          </TableCell>
          <TableCell data-testid={ getDataTestId('unitPrice', index, userRole) }>
            { getPrice(price) }
          </TableCell>
          <TableCell data-testid={ getDataTestId('subTotal', index, userRole) }>
            { getPrice(price * quantity) }
          </TableCell>
        </TableRow>
      )) }
    </TableBody>
  </Table>

);

ProductsTable.propTypes = {
  products: arrayOf(shape({
    name: string.isRequired,
    orderInfo: shape({ quantity: number.isRequired }).isRequired,
    price: string.isRequired,
  })).isRequired,
  userRole: string.isRequired,
};

export default ProductsTable;
