const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const listRoutes = require('./routes');

/* MIDDLEWARE */
const loadHeaders = require('./middlewares/loadHeaders');
const routeErrorHandler = require('./middlewares/routeErrorHandler');
const errorHandler = require('./middlewares/errorHandler');

class Server {
  app = express();
  PORT = process.env.PORT || 5000;
  ENV = process.env.NODE_ENV || 'development';

  constructor() {
    this.middlewaresIn();
    this.routes();
  }

  middlewaresIn() {
    this.ENV === 'development' ? this.app.use(morgan('dev')) : null;
    this.app
      .use(express.json({ limit: '50mb' }))
      .use(express.urlencoded({ limit: '50mb', extended: true }))
      .use(cors())
      .use(loadHeaders);
  }

  routes() {
    this.app.use('/api', listRoutes);
    this.app.use(routeErrorHandler);
    this.app.use(errorHandler);
  }

  async start(port = this.PORT) {
    await this.app.listen(port);
    console.log(`>>> Server start: on port ${port}`);
  }
}

module.exports = new Server();
