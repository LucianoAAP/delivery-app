import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getSaleFromCustomer, updateSale } from '../services/salesAPI';
import getUserInfo from '../utils/getLocalStorage';

const useOrderDetails = () => {
  const { id: orderId } = useParams();
  const [order, setOrder] = useState({});
  const [deliveredDisplay, setDeliveredDisplay] = useState(true);

  const { id: userId, token } = getUserInfo();

  useEffect(() => {
    getSaleFromCustomer(userId, token)
      .then((response) => setOrder(response[orderId - 1]));
  }, [orderId, userId, token]);

  useEffect(() => {
    if (order.status && order.status === 'Em Trânsito') {
      setDeliveredDisplay(false);
    } else {
      setDeliveredDisplay(true);
    }
  }, [order]);

  const receiveOrder = async () => {
    await updateSale({ ...order, status: 'Entregue' }, token);
    setOrder({ ...order, status: 'Entregue' });
  };

  return {
    orderId,
    order,
    deliveredDisplay,
    receiveOrder,
  };
};

export default useOrderDetails;
