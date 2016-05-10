import * as restify from 'restify';

export default class SampleRouteController {

    public get(req:restify.Request, res:restify.Response, next:restify.Next) {
        res.json(200, 'pong');
        return next();
    }
}