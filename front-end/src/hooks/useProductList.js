import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getProducts from '../services/getProducts';
import { getPrice } from '../utils/formatManipulation';

const useProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const mounted = useRef(false);
  const cartProducts = useSelector((state) => state.cart.cart);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const manupulatePrice = () => {
    const result = cartProducts
      .reduce((acc, cur) => (Number(cur.price) * Number(cur.quantity)) + acc, 0);
    return getPrice(result);
  };

  const setProductsOnState = async () => {
    const result = await getProducts();
    setProducts(() => result);
  };

  useEffect(() => {
    if (mounted.current) return setProductsOnState();
  }, []);

  return { products, navigate, manupulatePrice, cartProducts };
};

export default useProductList;
