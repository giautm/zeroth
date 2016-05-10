import * as restify from 'restify';
import SampleRouteController from '../controllers/SampleRouteController'

function sampleRoute(api:restify.Server) {
    let routeCtrl = new SampleRouteController();
    api.post('/api/ping', routeCtrl.get);
}

module.exports.routes = sampleRoute;