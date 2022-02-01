import axios from 'axios';

export const getSaleFromSeller = async (seller, token) => {
  const sales = await axios.get('http://localhost:3001/sales',
    { headers: { authorization: token } })
    .then((res) => res.data.filter((sale) => sale.sellerId === seller))
    .catch((error) => console.log(error));

  return sales;
};

export const getSaleFromCustomer = async (customer, token) => {
  const sales = await axios.get('http://localhost:3001/sales',
    { headers: { authorization: token } })
    .then((res) => res.data.filter((sale) => sale.userId === customer))
    .catch((error) => console.log(error));

  return sales;
};

export const updateSale = async (sale, token) => {
  const updatedSale = await axios.put(`http://localhost:3001/sales/${sale.id}`,
    sale,
    { headers: { authorization: token } })
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return updatedSale;
};
