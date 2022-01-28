import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getProducts from '../../services/getProducts';
import ProductCard from '../ProductCard';
import { ProductListContainer, ProductSection, FloatButtonCart } from './styles';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const setProductsOnState = async () => {
    const result = await getProducts();
    setProducts(result);
  };

  useEffect(() => {
    setProductsOnState();
  }, []);

  return (
    <ProductListContainer>
      <h1>LISTA DE PRODUTOS</h1>
      <ProductSection>
        {products.length > 0
          ? products.map((e) => <ProductCard product={ e } key={ e.id } />) : null}
      </ProductSection>
      <FloatButtonCart onClick={ () => navigate('/customer/orders') }>
        <h3 data-testid="customer_products__checkout-bottom-value">Ver Carrinho</h3>
      </FloatButtonCart>
    </ProductListContainer>
  );
};

export default ProductList;
