// Bot bootstrap
async function startBot() {
    // eslint-disable-next-line global-require
    await require('./loaders')();
}

startBot();
