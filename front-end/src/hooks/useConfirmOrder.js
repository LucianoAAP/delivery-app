import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import getSellers from '../services/getSellers';
import { clearCart } from '../redux/actions/cart';
import getSalesFromCustomer from '../services/getSalesFromCustomer';
import getUserInfo from '../utils/getUserInfo';
import createSale from '../services/createSale';

const socket = io('http://localhost:3001');

const INITIAL_BODY = {
  sellerId: '',
  deliveryAddress: '',
  deliveryNumber: '',
};

const useConfirmOrder = () => {
  const [sellers, setSellers] = useState();
  const [bodyInfo, setBodyInfo] = useState(INITIAL_BODY);
  const [disabledBtn, setDisabledBtn] = useState(true);

  const userId = getUserInfo('id');

  const cartState = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitSale = async () => {
    const fetchObj = await createSale({ ...bodyInfo,
      totalPrice: cartState.totalPrice,
      products: cartState.cart,
      status: 'Pendente' });

    socket.emit('statusUpdated');
    dispatch(clearCart());

    const userOrders = await getSalesFromCustomer(userId);

    const currentOrder = userOrders.findIndex((e) => e.id === fetchObj.data.id);

    return navigate(`/customer/orders/${currentOrder + 1}`);
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
