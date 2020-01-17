const config = require('./e2e/protractor.conf').config;

config.capabilities = {
    browserName: 'chrome',
    chromeOptions: {
        args: ['--headless']
    }
};

exports.config = config;