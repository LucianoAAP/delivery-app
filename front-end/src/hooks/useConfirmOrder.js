import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import createSale from '../services/createSale';
import getSellers from '../services/getSellers';

const INITIAL_BODY = {
  sellerId: '',
  deliveryAddress: '',
  deliveryNumber: '',
};

const useConfirmOrder = () => {
  const [sellers, setSellers] = useState();
  const [bodyInfo, setBodyInfo] = useState(INITIAL_BODY);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const cartState = useSelector((state) => state.cart);

  const submitSale = async () => {
    console.log(bodyInfo);
    await createSale({ ...bodyInfo,
      totalPrice: cartState.totalPrice,
      products: cartState.cart });
  };

  const handleChange = (target) => {
    setBodyInfo((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const getAllSellers = async () => setSellers(await getSellers());
  useEffect(() => {
    getAllSellers();
  }, []);

  useEffect(() => {
    const { deliveryAddress, deliveryNumber, sellerId } = bodyInfo;
    if (!deliveryAddress || !deliveryNumber || !sellerId || (cartState.cart.length < 1)) {
      return setDisabledBtn(true);
    }
    return setDisabledBtn(false);
  }, [bodyInfo, cartState.cart]);

  return { handleChange, sellers, disabledBtn, submitSale, bodyInfo };
};

export default useConfirmOrder;
