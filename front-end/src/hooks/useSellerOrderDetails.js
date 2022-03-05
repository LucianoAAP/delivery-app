import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import getSalesFromSeller from '../services/getSalesFromSeller';
import updateSale from '../services/updateSale';
import getUserInfo from '../utils/getUserInfo';

const socket = io('http://localhost:3001');

const useOrderDetails = () => {
  const navigate = useNavigate();
  const { id: orderId } = useParams();
  const mounted = useRef(false);
  const [order, setOrder] = useState({});
  const [preparingDisplay, setPreparingDisplay] = useState(true);
  const [dispatchDisplay, setDispatchDisplay] = useState(true);

  const userId = getUserInfo('id');

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    const updateOrder = async () => {
      if (mounted.current) {
        const sales = await getSalesFromSeller(userId);
        if (sales.error) return navigate('/seller/orders');
        const sale = sales[orderId - 1];
        if (!sale) return navigate('/seller/orders');
        setOrder(sale);
      }
    };

    updateOrder();

    socket.on('statusUpdated', () => updateOrder());
  }, [orderId, userId, navigate]);

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
    await updateSale({ ...order, status: 'Preparando' });
    setOrder({ ...order, status: 'Preparando' });

    socket.emit('statusUpdated');
  };

  const dispatchOrder = async () => {
    await updateSale({ ...order, status: 'Em Trânsito' });
    setOrder({ ...order, status: 'Em Trânsito' });

    socket.emit('statusUpdated');
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
