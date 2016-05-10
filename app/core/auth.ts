import {RequestHandler, Request, Response, Next, NotAuthorizedError} from "restify";

interface IBasicAuth {
    username:string,
    password:string
}

interface IAuthorization {
    scheme:string,
    credentials:string,
    basic?:IBasicAuth
}

function authBasic(auth?:IBasicAuth):boolean {
    if (auth && auth.username && auth.password) {
        return true;
    }

    return false;
}

export let Auth = function ():RequestHandler {
    return function (req:Request, res:Response, next:Next) {
        var auth = (req as {authorization?:IAuthorization}).authorization;
        if (auth && authBasic(auth.basic)) {
            return next();
        } else {
            return next(new NotAuthorizedError());
        }
    }
};