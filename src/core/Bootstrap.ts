import { AppOptions } from './App';
import debug = require('debug');
import express = require('express');
import mongoose = require('mongoose');
import http = require('http');

import { IService } from './Service';
import { Inject, InjectFactory } from './Inject';
import { RouteOptions } from './Route';
var serverLog = debug('server:');

export function bootstrap(target) {
    var appOptions: AppOptions = Reflect.getMetadata('AppOptions', target);
    var app = new CoreServer(appOptions);
}

export enum BootstrapMethod {
    HTTP,
    Express
}

class CoreServer {
    appOptions: AppOptions;
    app: express.Application;
    // static mongoInstance:

    constructor(appOptions: AppOptions) {
        this.appOptions = appOptions;
        this.app = express();
        this.init();
    }
    /** 
    resolveService() {
        this.appOptions.services.forEach(service => {
            console.log(service, InjectFactory.dependenciesMap);
            /**
             * 获取了当前的service类
             
            var component = InjectFactory.resolve(service);
            console.log('component:', component);
            component.sayHello();


        });

    }
     
     **/

    /**
     * 解析路由层的依赖
     */
    resolveRouteDependency() {

        this.appOptions.routes.forEach(RouteClass => {
            var routeOptions = Reflect.getMetadata('RouteOptions', RouteClass);
            var router = InjectFactory.resolve(RouteClass);
            console.log('router/', router);
            // router.hello();
            // router.hello();
            // router.hello();
            // router.hello();
            // router.hello();
            // router.hello();



            var func: Function = router.hello;
            // func.bind(router)();
            // 扫描原型链上的所有方法
            Object.getOwnPropertyNames(RouteClass.prototype).forEach(methodName => {
                if (methodName == "constructor") return;
                else {
                    this.app.use(`${routeOptions.path}/${methodName}`, router[methodName].bind(router));
                    serverLog(`Scanner request url:${routeOptions.path}/${methodName}`);
                }
            })


        });
    }

    init() {
        this.staticPublic();
        // this.resolveService();
        this.resolveRouteDependency();
        this.connectMongo(this.appOptions.mongoUrl);
        this.appOptions.bootstrap == BootstrapMethod.HTTP ? this.runByHttp() : this.runByExpress();


    }

    /**
     * 静态文件服务器
     */
    staticPublic() {
        this.app.use(express.static(this.appOptions.staticServer));
        serverLog(`static-file-server:` + this.appOptions.staticServer);
    }

    runByHttp() {
        var server = http.createServer(this.app);
        server.listen(this.appOptions.port, () => {
            serverLog('http-server is running on:' + this.appOptions.port);
        });
    }

    runByExpress() {
        this.app.listen(this.appOptions.port, () => {
            serverLog('express-server is running on:' + this.appOptions.port);
        });
    }

    scannerRoutes() {
        this.appOptions.routes.forEach((RouteClass: any) => {
            var routeOptions = Reflect.getMetadata('RouteOptions', RouteClass);
            var router = new RouteClass();

        });
    }

    connectMongo(mongoUrl: string) {
        mongoose.connect(mongoUrl);
    }


}

