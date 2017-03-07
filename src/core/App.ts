import { Route, IRoute } from './Route';
import { BootstrapMethod } from './Bootstrap';
import { IService } from './Service';

/**
 * 
 * @param appOptions 服务器启动参数
 */
export function App(appOptions: AppOptions) {
    return (target) => {
        Reflect.defineMetadata('AppOptions', appOptions, target);
    }
}

export interface AppOptions {
    port: number;
    routes: any[];
    staticServer?: string;
    bootstrap: BootstrapMethod;
    mongoUrl: string;
    isAllowCrossDomain?: boolean;

}