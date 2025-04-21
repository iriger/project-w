import { config as baseConfig } from './wdio.conf.js';

export const config = {
    ...baseConfig,
    capabilities: [{
        browserName: 'MicrosoftEdge',
        'ms:edgeOptions': {
            args: ['--window-size=1440,900']
        }
    }],
    // services: ['edgedriver'],
    // path: '/'
};