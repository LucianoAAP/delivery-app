const getUserInfo = (key) => {
  const userInfo = JSON.parse(localStorage.getItem('user'));
  if (!userInfo) return {};
  if (!key) return userInfo;
  return userInfo[key];
};

export default getUserInfo;
