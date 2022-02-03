import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getProducts from '../services/getProducts';
import { getPrice } from '../utils/formatManipulation';
import useCheckLogin from './useCheckLogin';

const useProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cart.cart);

  useCheckLogin('customer');

  const manupulatePrice = () => {
    const result = cartProducts
      .reduce((acc, cur) => (Number(cur.price) * Number(cur.quantity)) + acc, 0);
    return getPrice(result);
  };

  const setProductsOnState = async () => {
    const result = await getProducts();
    setProducts(result);
  };

  useEffect(() => {
    setProductsOnState();
  }, []);

  return { products, navigate, manupulatePrice, cartProducts };
};

export default useProductList;
