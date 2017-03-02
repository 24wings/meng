import { IRoute } from './route/interface/Route';

export function Route(option: {
    /**
     * 业务api
     * 
     * @type {String}
     */
    path: String
}) {
    return (target: new () => IRoute) => {
        Reflect.defineMetadata('route', option, target);

    }
}