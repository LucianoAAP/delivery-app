const getUserInfo = (key) => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (userInfo) return userInfo[key];
  return [];
};

export default getUserInfo;
