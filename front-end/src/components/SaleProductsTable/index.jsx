import React from 'react';
import PropTypes from 'prop-types';
import { getPrice } from '../../utils/formatManipulation';

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
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Sub-total</th>
      </tr>
    </thead>
    <tbody>
      { products.map((product, index) => {
        const { name, orderInfo, price } = product;
        return (
          <tr key={ `product-${index}` }>
            <td data-testid={ getDataTestId('number') }>{ index + 1 }</td>
            <td data-testid={ getDataTestId('name') }>{ name }</td>
            <td data-testid={ getDataTestId('quantity') }>{ orderInfo.quantity }</td>
            <td data-testid={ getDataTestId('unitPrice') }>{ getPrice(price) }</td>
            <td data-testid={ getDataTestId('subTotal') }>
              { getPrice(price * orderInfo.quantity) }
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
