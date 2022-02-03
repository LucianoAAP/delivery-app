export const addNewUser = (user) => ({
  type: 'ADD_USER', payload: user,
});

export const reformUserState = (users) => ({
  type: 'REFORM_USER', payload: users,
});
