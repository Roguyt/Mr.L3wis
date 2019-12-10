module.exports = {
    env: process.env.NODE_ENV || 'production',
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
    epics: {
        email: process.env.EPICS_EMAIL || '',
        password: process.env.EPICS_PASSWORD || '',
    }
};
