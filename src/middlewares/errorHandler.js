const HttpStatus = require('http-status-codes');

function errorHandler(err, req, res, next) {
  // Error handling is delegated to Express
  if (res.headersSent) {
    console.log('>>> Handling Express: ');
    return next(err);
  }

  switch (err.name) {
    case 'RouteError':
      res.status(HttpStatus.NOT_FOUND);
      break;

    case 'ValidationError':
      res.status(HttpStatus.BAD_REQUEST);
      break;

    default:
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      break;
  }

  res.json({
    type: err.name,
    message: err.message
  });
}

module.exports = errorHandler;
