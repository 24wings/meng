"use strict";
import 'reflect-metadata';
import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import { HeroRoute } from './route/HeroRoute';
import { PlayerRoute } from './route/PlayerRoute';
/**
 * The server.
 *
 * @class Server
 */
class Server {

    public app: express.Application;

    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    public static bootstrap(): Server {
        return new Server();
    }

    /**
     * 路由组件
     */
    get routes() {
        return [HeroRoute, PlayerRoute];
    }

    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        //create expressjs application
        this.app = express();


        /**
         * 
         */
        this.routes.forEach(Route => {
            var tempApp = express();
            var routeOption = Reflect.getMetadata('route', Route);
            var route = new HeroRoute();
            var secondRoutes = Object.getOwnPropertyNames(Route.prototype);
            secondRoutes.forEach(secondRoute => {
                if (secondRoute == 'constructor') { return; }
                else {
                    console.log(`扫描到二级路由: ${routeOption.path}  / ${route[secondRoute]}`)
                    tempApp.use(routeOption.path, route[secondRoute]);
                }
            });
            this.app.use(tempApp);
        });


        this.app.listen(3000, () => {
            console.log(3000);
        });
    }
}

new Server();
