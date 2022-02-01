export const addToCart = (product) => ({
  type: 'ADD_CART', payload: product,
});

export const editQuantityCart = (product) => ({
  type: 'EDIT_CART', payload: product,
});

export const addTotalPrice = (price) => ({
  type: 'TOTAL_PRICE', payload: price,
});
