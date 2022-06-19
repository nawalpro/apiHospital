
const { NOT_FOUND } = require("../StatusCode");

module.exports = class NotFoundError extends Error {
  constructor(message, description, ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotFoundError);
    }
    this.name = `NotFoundError`;
    this.status = NOT_FOUND;
    this.message = message;
    this.description = description;
  }
};