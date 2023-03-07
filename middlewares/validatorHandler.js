const boom = require('@hapi/boom');

function validatorHandler (schema,  property) {
  //Closure implementation
  return (req, res, next) => {
    //Gets data dinamically from params, or body, from whatever it comes
      const data = req[property];
      const { error } = schema.validate(data, { abortEarly: false });
      if (error) {
        next(boom.badRequest(error));
      }
    next();
  }
}

module.exports = validatorHandler;