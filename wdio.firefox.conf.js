import { config as baseConfig }  from './wdio.conf.js';

export const config = {
    ...baseConfig,
    capabilities: [{
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['--width=1440', '--height=900']
        }
    }],
    // services: ['geckodriver'],
    // path: '/'
};