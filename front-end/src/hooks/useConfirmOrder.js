import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
import getSellers from '../services/getSellers';
import { clearCart } from '../redux/actions/cart';
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

  const cartState = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  // const navigate = useNavigate();

  // const throwAlert = (fetchObj) => {
  //   if (fetchObj.error) {
  //     return (
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Oops...',
  //         text: 'Algo deu errado ao enviar seu pedido!',
  //         timer: 2000,
  //       })
  //     );
  //   }
  //   return (
  //     Swal.fire({
  //       title: 'Tudo certo!',
  //       text: 'seu pedido foi confirmado!',
  //       icon: 'success',
  //       timer: 2000,
  //     }).then(() => navigate(`/customer/orders/${fetchObj.data.id}`))
  //   );
  // };

  const submitSale = async () => {
    const fetchObj = await createSale({ ...bodyInfo,
      totalPrice: cartState.totalPrice,
      products: cartState.cart,
      status: 'Pendente' });

    socket.emit('statusUpdated');
    dispatch(clearCart());

    // return throwAlert(fetchObj);
    window.location.href = `/customer/orders/${fetchObj.data.id}`;
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
