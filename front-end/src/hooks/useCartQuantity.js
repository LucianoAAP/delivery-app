import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { editQuantityCart, addToCart } from '../redux/actions/cart';

const useCartQuantity = (product) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart.cart);

  const addCartProduct = () => {
    const currentQuantity = quantity + 1;
    const productExists = cartState.find((e) => e.id === product.id);
    if (productExists) {
      const editQuantity = cartState.filter((e) => e.id !== product.id);
      dispatch(editQuantityCart(
        [...editQuantity, { ...product, quantity: currentQuantity }],
      ));
      return setQuantity(currentQuantity);
    }
    dispatch(addToCart({ ...product, quantity: currentQuantity }));
    return setQuantity(currentQuantity);
  };

  const subtractCartProduct = () => {
    const currentQuantity = quantity - 1 < 0 ? 0 : quantity - 1;
    const removedProduct = cartState.filter((e) => e.id !== product.id);
    if (currentQuantity > 0) {
      dispatch(editQuantityCart(
        [...removedProduct, { ...product, quantity: currentQuantity }],
      ));
      return setQuantity(currentQuantity);
    }
    dispatch(editQuantityCart(removedProduct));
    return setQuantity(currentQuantity);
  };

  const changeProductQuantity = (operator) => {
    if (operator === '-') {
      if (quantity === 0) return;
      return subtractCartProduct();
    }
    return addCartProduct();
  };

  return { changeProductQuantity, quantity };
};

export default useCartQuantity;
