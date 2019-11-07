function routeErrorHandler(req, res, next) {
  next({
    name: 'RouteError',
    message: `Route not found - route '${req.originalUrl}' is not among the available routes`
  });
}

module.exports = routeErrorHandler;
