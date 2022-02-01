const INITIAL_STATE = {
  cart: [],
  totalPrice: 0,
};

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_CART':
    return { ...state, cart: [...state.cart, action.payload] };
  case 'EDIT_CART':
    return { ...state, cart: action.payload };
  case 'TOTAL_PRICE':
    return { ...state, totalPrice: action.payload };
  default:
    return state;
  }
};

export default cart;
