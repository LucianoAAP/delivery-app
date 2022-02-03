import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { useParams } from 'react-router';
import getSaleFromCustomer from '../services/getSaleFromCustomer';
import updateSale from '../services/updateSale';
import getUserInfo from '../utils/getUserInfo';

const socket = io('http://localhost:3001');

const useOrderDetails = () => {
  const mounted = useRef(false);
  const { id: orderId } = useParams();
  const [order, setOrder] = useState({});
  const [deliveredDisplay, setDeliveredDisplay] = useState(true);

  const userId = getUserInfo('id');

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    const updateOrder = () => {
      if (mounted.current) {
        getSaleFromCustomer(userId).then((response) => setOrder(response[orderId - 1]));
      }
    };

    updateOrder();

    socket.on('statusUpdated', () => updateOrder());
  }, [orderId, userId]);

  useEffect(() => {
    if (order.status && order.status === 'Em Trânsito') {
      setDeliveredDisplay(false);
    } else {
      setDeliveredDisplay(true);
    }
  }, [order]);

  const receiveOrder = async () => {
    await updateSale({ ...order, status: 'Entregue' });
    setOrder({ ...order, status: 'Entregue' });

    socket.emit('statusUpdated');
  };

  return {
    orderId,
    order,
    deliveredDisplay,
    receiveOrder,
  };
};

export default useOrderDetails;
