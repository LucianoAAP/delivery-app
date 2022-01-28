const checkLogin = (email, password) => {
  const minPass = 6;
  const regex = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;

  if (!email || !regex.test(email)) {
    return true;
  }

  if (!password || password.length < minPass) {
    return true;
  }

  return false;
};

export default checkLogin;
