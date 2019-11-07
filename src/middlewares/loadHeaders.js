function loadHeaders(req, res, next) {
  res
    .header('Content-Type', 'application/json')
    .header('Accept', 'application/json')
    .header('Access-Control-Allow-Origin', '*')
    .header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
    .header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Access-control-allow-origin'
    );

  next();
}

module.exports = loadHeaders;
