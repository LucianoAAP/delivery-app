const joi = require('joi');

const schema = joi.object().keys({
  name: joi.string().empty(false).required(),
  email: joi.string().email().empty(false).required(),
  password: joi.string().empty(false).min(6).required(),
  role: joi.string().empty(false),
});

const userValidate = (user) => {
  const { error } = schema.validate(user);

  if (error) {
    return error.details[0].message;
  }
  
  return false;
};

module.exports = userValidate;