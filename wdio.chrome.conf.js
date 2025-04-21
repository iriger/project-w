import { config as baseConfig } from './wdio.conf.js';

export const config = {
    ...baseConfig,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--window-size=1440,900']
        }
    }],
    // services: ['chromedriver'],
    // path: '/'
};
