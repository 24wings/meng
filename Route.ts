import { IRoute } from './route/interface/Route';
import { Server } from './app';
var allRoutes = [];
export { allRoutes };
export function Route(option: { path: String }) {
    return (target: new () => IRoute) => {
        Reflect.defineMetadata('route', option, target);
        allRoutes.push(target);
    }
}

