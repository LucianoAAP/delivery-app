const { BAD_REQUEST, NOT_FOUND, CONFLICT, UNAUTHORIZED } = require('http-status-codes');

class ApiError {
  constructor(message, code) {
    this.message = message;
    this.code = code;
  }

  static badRequest(message) {
    throw new ApiError(message, BAD_REQUEST);
  }

  static notFound(message) {
    throw new ApiError(message, NOT_FOUND);
  }

  static conflict(message) {
    throw new ApiError(message, CONFLICT);
  }

  static unauthorized(message) {
    throw new ApiError(message, UNAUTHORIZED);
  }
}

module.exports = ApiError;