const EpicsGG = require('node-epicsgg');

const config = require('../config');

module.exports = async () => {
    const epics = new EpicsGG({
        email: config.epics.email,
        password: config.epics.password,
        useSocket: true
    });

    // eslint-disable-next-line global-require
    await require('../bot/')({ epics });
};
