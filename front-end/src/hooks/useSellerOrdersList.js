import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import getSalesFromSeller from '../services/getSalesFromSeller';
import getUserInfo from '../utils/getUserInfo';

const socket = io('http://localhost:3001');

const useSellerOrdersList = () => {
  const mounted = useRef(false);
  const [orders, setOrders] = useState([]);
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
        getSalesFromSeller(userId).then((response) => setOrders(response));
      }
    };

    updateOrder();

    socket.on('statusUpdated', () => updateOrder());
  }, [userId]);

  return { orders };
};

export default useSellerOrdersList;
