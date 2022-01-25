const Joi = require('joi');

const schema = Joi.object().keys({
  userId: Joi.number().empty(false).required(),
  sellerId: Joi.number().empty(false).required(),
  totalPrice: Joi.number().empty(false).required(),
  deliveryAddress: Joi.string().empty(false).required(),
  deliveryNumber: Joi.string().empty(false).required(),
  status: Joi.string().empty(false).required(),
});

const schemaStatus = Joi.string().empty(false).required();

const schemaSales = (sale) => {
  const { error } = schema.validate(sale);

  if (error) {
    return error.details[0].message;
  }

  return false;
};

const schemaSalesUpdate = (status) => {
  const { error } = schemaStatus.validate(status);

  if (error) {
    return error.details[0].message;
  }

  return false;
};

module.exports = { schemaSales, schemaSalesUpdate };
