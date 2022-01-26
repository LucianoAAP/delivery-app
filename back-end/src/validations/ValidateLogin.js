const joi = require('joi');

const schema = joi.object().keys({
  email: joi.string().email().empty(false).required(),
  password: joi.string().empty(false).min(6).required(),
});

const validateLogin = (user) => {
  const { error } = schema.validate(user);

  if (error) {
    return error.details[0].message;
  }
  
  return false;
};

module.exports = validateLogin;