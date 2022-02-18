import { useState, useEffect, useRef, useCallback } from 'react';
import io from 'socket.io-client';
import { useParams } from 'react-router';
import getSalesFromCustomer from '../services/getSalesFromCustomer';
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

  const getCurrentOrder = useCallback(async () => {
    const sale = await getSalesFromCustomer(userId);
    return setOrder(() => sale[orderId - 1]);
  }, [orderId, userId]);

  useEffect(() => {
    if (mounted.current) {
      getCurrentOrder();
    }
    socket.emit('statusUpdated');
  }, [getCurrentOrder]);

  socket.on('statusUpdated', () => getCurrentOrder());

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
