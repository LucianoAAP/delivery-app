import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { ProductContainer, ImageContainer,
  ProductImg, InfoContainer, Name, Price, Span, ChangeQuantity } from './styles';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const changeProductQuantity = (operator) => {
    if (operator === '-') {
      return setQuantity((prevQnt) => {
        if (prevQnt - 1 < 0) return 0;
        return prevQnt - 1;
      });
    }
    return setQuantity((prevQnt) => prevQnt + 1);
  };

  return (
    <ProductContainer>
      <ImageContainer>
        <ProductImg
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          src={ product.urlImage }
          alt="product"
        />
      </ImageContainer>
      <InfoContainer>
        <Name
          data-testid={ `customer_products__element-card-title${product.id}` }
        >
          {product.name}
        </Name>
        <Price>
          R$
          <Span
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            {product.price}
          </Span>
        </Price>
        <ChangeQuantity>
          <button
            onClick={ () => changeProductQuantity('+') }
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            type="button"
          >
            +
          </button>
          <p
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
          >
            {quantity}
          </p>
          <button
            onClick={ () => changeProductQuantity('-') }
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            type="button"
          >
            -
          </button>
        </ChangeQuantity>
      </InfoContainer>
    </ProductContainer>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    urlImage: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
