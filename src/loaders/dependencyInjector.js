const { Container } = require('typedi');
const LoggerInstance = require('./logger');

module.exports = () => {
    try {
        Container.set('logger', LoggerInstance);
    } catch (e) {
        LoggerInstance.error('🔥 Error on dependency injector loader: %o', e);
        throw e;
    }
};
