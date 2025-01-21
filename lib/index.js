const logger = require('pino')();

function helloWorld() {
  logger.info('Calling helloWorld()...')
  return 'Hello, World!';
}

module.exports = { helloWorld }
