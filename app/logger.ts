import * as bunyan from 'bunyan';
import {settings} from './config';

export let logger = bunyan.createLogger({
    name: settings.name,
    streams: [
        {
            level: 'info',
            stream: process.stdout
        },
        {
            level: 'error',
            path: `error.log`
        }
    ]
});