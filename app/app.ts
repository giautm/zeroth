import * as restify from 'restify';
import * as fs from 'fs';
import {settings} from './config';
import {logger} from './logger';
import * as auth from './core/auth';

var server = restify.createServer({
    name: settings.name,
    log: logger
});

restify.CORS.ALLOW_HEADERS.push('authorization');
server.use(restify.CORS());
server.pre(restify.pre.sanitizePath());
server.use(restify.acceptParser(server.acceptable));
server.use(restify.bodyParser());
server.use(restify.queryParser());
server.use(restify.authorizationParser());
server.use(restify.fullResponse());
server.use(auth.Auth());

fs.readdirSync(__dirname + '/routes').forEach(function (routeConfig:string) {
    if (routeConfig.substr(-3) === '.js') {
        var route = require(__dirname + '/routes/' + routeConfig);
        route.routes(server);
    }
});

server.listen(settings.port, function () {
    console.log(`INFO: ${settings.name} is running at ${server.url}`);
});