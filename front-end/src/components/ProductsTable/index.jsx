import React from 'react';
import PropTypes from 'prop-types';
import { getPrice } from '../../utils/formatManipulation';
import { Columns, Name, Quantity } from './styles';

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
  <table>
    <thead>
      <tr>
        <Columns>Item</Columns>
        <Columns>Descrição</Columns>
        <th>Quantidade</th>
        <Columns>Valor Unitário</Columns>
        <Columns>Sub-total</Columns>
      </tr>
    </thead>
    <tbody>
      { products.map((product, index) => {
        const { name, orderInfo: { quantity }, price } = product;
        return (
          <tr key={ `product-${index}` }>
            <td data-testid={ getDataTestId('number', index, userRole) }>
              { index + 1 }
            </td>
            <Name data-testid={ getDataTestId('name', index, userRole) }>{ name }</Name>
            <Quantity data-testid={ getDataTestId('quantity', index, userRole) }>
              { quantity }
            </Quantity>
            <td data-testid={ getDataTestId('unitPrice', index, userRole) }>
              { getPrice(price) }
            </td>
            <td data-testid={ getDataTestId('subTotal', index, userRole) }>
              { getPrice(price * quantity) }
            </td>
          </tr>
        );
      }) }
    </tbody>
  </table>
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
