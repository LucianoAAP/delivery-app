const INITIAL_STATE = {
  users: [],
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_USER':
    return { ...state, users: [...state.users, action.payload] };
  case 'REFORM_USER':
    return { ...state, users: action.payload };
  default:
    return state;
  }
};

export default user;
