import axios from 'axios';

export const getAllSales = async () => {
  const sales = await axios.get('http://localhost:3001/sales')
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return sales;
};

export const getSaleFromSeller = async (seller) => {
  const sales = await axios.get('http://localhost:3001/sales')
    .then((res) => res.data.filter((sale) => sale.sellerId === seller))
    .catch((error) => console.log(error));

  return sales;
};
