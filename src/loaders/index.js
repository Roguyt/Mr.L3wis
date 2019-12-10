const dependencyInjectorLoader = require('./dependencyInjector');
const botLoader = require('./bot');
const Logger = require('./logger');

module.exports = async () => {
    await dependencyInjectorLoader();
    Logger.info('✌️ DI loaded');

    await botLoader();
    Logger.info('✌️ Bot loaded');
};
