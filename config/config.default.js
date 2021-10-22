'use strict';

/**
 * egg-rabbitmq default config
 * @member Config#rabbitmq
 * @property {String} SOME_KEY - some description
 */
exports.rabbitMQ = {
  app: true,
  agent: false,
  locale: 'en_US',
  frameMax: 0,
  heartbeat: 0,
  vhost: '/',
};
