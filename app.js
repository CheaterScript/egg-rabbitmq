'use strict';

const rabbitMQ = require('./lib/rabbitMQ');

module.exports = app => {
  if (app.config.rabbitMQ.app) rabbitMQ(app);
};
