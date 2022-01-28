const { INTERNAL_SERVER_ERROR } = require('http-status-codes');
const ApiError = require('../Error/ApiError');

module.exports = (err, req, res, _next) => {
  console.log({ erro: err });

  if (err instanceof ApiError) {
    return res.status(err.code).json(err.message);
  }

  return res.status(INTERNAL_SERVER_ERROR).json({ message: 'Internal error!' });
};