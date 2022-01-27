import React from 'react';
import PropTypes from 'prop-types';

const SellerHeader = ({ user }) => (
  <header>
    <div data-testid="customer_products__element-navbar-link-orders">Pedidos</div>
    <div>
      <div data-testid="customer_products__element-navbar-user-full-name">{ user }</div>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </div>
  </header>
);

SellerHeader.propTypes = {
  user: PropTypes.string.isRequired,
};

export default SellerHeader;
