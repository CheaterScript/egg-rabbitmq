'use strict';

const rabbitMQ = require('./lib/rabbitMQ');

module.exports = agent => {
  if (agent.config.rabbitMQ.agent) rabbitMQ(agent);
};
