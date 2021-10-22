'use strict';

const assert = require('assert');
const amqplib = require('amqplib');

module.exports = app => {
  app.addSingleton('rabbitMQ', createOneClient);
};

async function createOneClient(config, app) {
  const {
    protocol,
    hostname,
    port,
    username,
    password,
  } = config;

  assert(protocol && hostname && port && username && password);

  app.coreLogger.info('[egg-rabbitmq] connecting %s@%s:%s',
    username, hostname, port);
  const client =  await amqplib.connect(config);

  app.beforeStart(async () => {
    app.coreLogger.info('[egg-rabbitmq] init instance success');
  });

  return client;
}
