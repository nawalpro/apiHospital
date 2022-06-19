const { FORBIDDEN } = require("../StatusCode");

module.exports = class ForbiddenError extends Error {
  constructor(message, description, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ForbiddenError);
    }

    this.name = `ForbiddenError`;
    this.status = FORBIDDEN;
    this.message = message;
    this.description = description;
  }
};
