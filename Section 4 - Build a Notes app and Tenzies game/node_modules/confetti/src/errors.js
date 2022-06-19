const _ = require('lodash')
const util = require('util')

const customError = function (name) {
  var error
  error = function (type, options) {
    if (options == null) {
      options = {}
    }
    Error.call(this)
    this.name = name
    this.message = type
    this.errorType = type
    Error.captureStackTrace(this, this.constructor)
    return Object.assign(this, options)
  }
  util.inherits(error, Error)
  error.prototype.name = name
  return error
}

module.exports = {
  UnauthorizedError: customError('UnauthorizedError'),
  ParameterError: customError('ParameterError'),
  NotFoundError: customError('NotFoundError'),
}
