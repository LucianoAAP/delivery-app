import React from 'react';
import PropTypes from 'prop-types';
import { getPrice } from '../../utils/formatManipulation';
import { Columns, Name, Quantity } from './styles';

const { arrayOf, shape, string, number } = PropTypes;

const getDataTestId = (key, index) => {
  const dataTestIds = {
    number: `seller_order_details__element-order-table-item-number-${index}`,
    name: `seller_order_details__element-order-table-name-${index}`,
    quantity: `seller_order_details__element-order-table-quantity-${index}`,
    unitPrice: `seller_order_details__element-order-table-unit-price-${index}`,
    subTotal: `seller_order_details__element-order-table-sub-total-${index}`,
  };

  return dataTestIds[key];
};

const SaleProductsTable = ({ products }) => (
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
            <td data-testid={ getDataTestId('number') }>{ index + 1 }</td>
            <Name data-testid={ getDataTestId('name') }>{ name }</Name>
            <Quantity data-testid={ getDataTestId('quantity') }>{ quantity }</Quantity>
            <td data-testid={ getDataTestId('unitPrice') }>{ getPrice(price) }</td>
            <td data-testid={ getDataTestId('subTotal') }>
              { getPrice(price * quantity) }
            </td>
          </tr>
        );
      }) }
    </tbody>
  </table>
);

SaleProductsTable.propTypes = {
  products: arrayOf(shape({
    name: string.isRequired,
    orderInfo: shape({ quantity: number.isRequired }).isRequired,
    price: string.isRequired,
  })).isRequired,
};

export default SaleProductsTable;
