import restify = require('restify');
import SampleRouteController from '../controllers/SampleRouteController'

function sampleRoute(api:restify.Server) {
    let routeCtrl = new SampleRouteController();
    api.get('/api/ping', routeCtrl.get);
}

module.exports.routes = sampleRoute;