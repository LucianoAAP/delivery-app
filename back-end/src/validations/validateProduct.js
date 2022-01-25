const joi = require('joi');

const schema = joi.object().keys({
  name: joi.string().empty(false).required().min(8),
  price: joi.number().empty(false).required(),
  urlImage: joi.string().empty(false).required(),
});

module.exports = (user) => {
  const { error } = schema.validate(user);

  if (error) {
    return error.details[0].message;
  }
  
  return false;
};