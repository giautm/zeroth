import * as path from 'path';

export interface Config {
    name:string,
    port:number,
    env:string,
    version:string
}

var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';

export let settings:Config = {
    name: 'zeroth',
    version: '0.0.1',
    port: 3000,
    env: 'dev'
};

if (env !== 'development') {
    settings.env = 'prod';
}