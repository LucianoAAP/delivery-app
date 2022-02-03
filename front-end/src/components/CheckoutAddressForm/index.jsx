import PropTypes from 'prop-types';
import React from 'react';
import { Form,
  Label,
  SelectSeller } from './styles';

const CheckoutAddressForm = ({ bodyInfo, sellers, handleChange }) => (
  <Form>
    <Label htmlFor="seller-field">
      P. Vendedora Responsável:
      <SelectSeller
        name="sellerId"
        value={ bodyInfo.sellerId }
        onChange={ ({ target }) => handleChange(target) }
        id="seller-field"
        data-testid="customer_checkout__select-seller"
      >
        <option value="">Escolha a pessoa vendedora</option>
        {
          sellers
            ? sellers.map((e) => (
              <option
                key={ e.id }
                value={ e.id }
              >
                {e.name}
              </option>
            ))
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
);

CheckoutAddressForm.propTypes = {
  bodyInfo: PropTypes.shape({
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
    sellerId: PropTypes.string,
  }),
  sellers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  })),
  handleChange: PropTypes.func.isRequired,
};

CheckoutAddressForm.defaultProps = {
  bodyInfo: PropTypes.shape({
    deliveryAddress: '',
    deliveryNumber: '',
    sellerId: '',
  }),
  sellers: [],
};

export default CheckoutAddressForm;
