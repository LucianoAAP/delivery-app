import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getSaleFromCustomer, updateSale } from '../services/salesAPI';
import getUserInfo from '../utils/getLocalStorage';

const useOrderDetails = () => {
  const { id: orderId } = useParams();
  const [order, setOrder] = useState({});
  const [deliveredDisplay, setDeliveredDisplay] = useState(true);

  useEffect(() => {
    const userId = getUserInfo('id');
    getSaleFromCustomer(userId).then((response) => setOrder(response[orderId - 1]));
  }, [orderId]);

  useEffect(() => {
    if (order.status && order.status === 'Entregue') {
      setDeliveredDisplay(true);
    } else {
      setDeliveredDisplay(false);
    }
  }, [order]);

  const receiveOrder = async () => {
    await updateSale({ ...order, status: 'Entregue' });
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
