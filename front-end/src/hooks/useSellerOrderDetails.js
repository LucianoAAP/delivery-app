import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getSaleFromSeller, updateSale } from '../services/salesAPI';
import getUserInfo from '../utils/getLocalStorage';

const useOrderDetails = () => {
  const { id: orderId } = useParams();
  const [order, setOrder] = useState({});
  const [preparingDisplay, setPreparingDisplay] = useState(true);
  const [dispatchDisplay, setDispatchDisplay] = useState(true);

  const { id: userId, token } = getUserInfo();

  useEffect(() => {
    getSaleFromSeller(userId, token).then((response) => setOrder(response[orderId - 1]));
  }, [orderId, userId, token]);

  useEffect(() => {
    if (order.status && order.status === 'Pendente') {
      setPreparingDisplay(false);
    } else {
      setPreparingDisplay(true);
    }
    if (order.status && order.status === 'Preparando') {
      setDispatchDisplay(false);
    } else {
      setDispatchDisplay(true);
    }
  }, [order]);

  const prepareOrder = async () => {
    await updateSale({ ...order, status: 'Preparando' }, token);
    setOrder({ ...order, status: 'Preparando' });
  };

  const dispatchOrder = async () => {
    await updateSale({ ...order, status: 'Em Trânsito' }, token);
    setOrder({ ...order, status: 'Em Trânsito' });
  };

  return {
    orderId,
    order,
    preparingDisplay,
    dispatchDisplay,
    prepareOrder,
    dispatchOrder,
  };
};

export default useOrderDetails;
