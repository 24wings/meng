import { IService } from './Service';

export class IRoute {

}

export function Route(option: RouteOptions) {
    return (target: any) => {
        Reflect.defineMetadata('RouteOptions', option, target);
    }
}

export interface RouteOptions {
    path: String;
    services: any[];
}