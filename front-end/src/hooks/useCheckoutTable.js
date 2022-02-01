import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTotalPrice, editQuantityCart } from '../redux/actions/cart';
import { getPrice } from '../utils/formatManipulation';

const useCheckoutTable = () => {
  const [totalPrice, setTotal] = useState('');
  const cartState = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const tableHeaderItens = [
    'Item', 'Descrição', 'Quantidade', 'Valor unitário', 'Sub-total', 'Remover item',
  ];

  const calculateTotal = useCallback(() => {
    if (cartState) {
      const total = cartState.reduce(
        (acc, cur) => (Number(cur.price * cur.quantity)) + acc, 0,
      );
      dispatch(addTotalPrice(total));
      return setTotal(getPrice(total));
    }
    dispatch(addTotalPrice(0));
    return setTotal(getPrice(0));
  }, [cartState, dispatch]);

  useEffect(() => {
    calculateTotal();
  }, [calculateTotal, cartState]);

  const removeFromCart = (productId) => {
    const removedItem = cartState.filter((e) => e.id !== productId);
    return dispatch(editQuantityCart(removedItem));
  };

  return { removeFromCart, totalPrice, tableHeaderItens, cartState };
};

export default useCheckoutTable;
