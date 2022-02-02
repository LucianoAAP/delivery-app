import React from 'react';
import { PropTypes } from 'prop-types';
import { ProductContainer, ImageContainer,
  ProductImg, InfoContainer, Name, Price, Span,
  ChangeQuantity, QauntityInput } from './styles';
import useCartQuantity from '../../hooks/useCartQuantity';

const ProductCard = ({ product }) => {
  const { quantity, changeProductQuantity,
    handleQuantityChange } = useCartQuantity(product);

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
          data-testid={ `customer_products__element-card-title-${product.id}` }
        >
          {product.name}
        </Name>
        <Price>
          R$
          <Span
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            {product.price.replace(/\./, ',')}
          </Span>
        </Price>
        <ChangeQuantity>
          <button
            onClick={ () => changeProductQuantity('-') }
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            type="button"
          >
            -
          </button>
          <QauntityInput
            type="number"
            min="1"
            max="1000"
            value={ quantity }
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
            onChange={ ({ target }) => handleQuantityChange(target) }
          />
          <button
            onClick={ () => changeProductQuantity('+') }
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            type="button"
          >
            +
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
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
