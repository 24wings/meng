import { AppOptions } from './App';
import debug = require('debug');
import express = require('express');
import bodyParser = require('body-parser');
import mongoose = require('mongoose');
import http = require('http');

import { IService } from './Service';
import { Inject, InjectFactory } from './Inject';
import { RouteOptions } from './Route';
import { RestfulOptions, RestfulFactory, RestfulApi } from './Restful';
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
     * 解析路由层的依赖
     */
    resolveRouteDependency() {

        this.appOptions.routes.forEach(RouteClass => {
            var routeOptions = Reflect.getMetadata('RouteOptions', RouteClass);
            var router = InjectFactory.resolve(RouteClass);
            console.log('router/', router);




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

    allowCrossDomain(isAllowCrossDomain: boolean) {
        if (isAllowCrossDomain) {
            this.app.use((req, res, next) => {
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
                res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

                next();
            });
        }
    }


    init() {
        this.staticPublic();
        this.allowCrossDomain(this.appOptions.isAllowCrossDomain);
        this.bodyParser();
        this.resolveRouteDependency();
        this.connectMongo(this.appOptions.mongoUrl);
        this.appOptions.bootstrap == BootstrapMethod.HTTP ? this.runByHttp() :
            this.schemaRestful();
        this.runByExpress();


    }
    bodyParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.text());

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
        var options = {
            server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
            replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
        };
        mongoose.connect(mongoUrl, options);
    }



    schemaRestful() {
        for (var [target, schema] of RestfulFactory.allSchemaTarget()) {
            var restfulOptions: RestfulOptions =
                Reflect.getMetadata('RestfulOptions', target);
            this.app.route(restfulOptions.url)
                .get(RestfulApi.get(RestfulFactory.getModel(target)))
                .post(RestfulApi.post(RestfulFactory.getModel(target)))
                .delete(RestfulApi.delete(RestfulFactory.getModel(target)))
                .put(RestfulApi.put(RestfulFactory.getModel(target)))
                // .options(RestfulApi.options(restfulOptions.schema))
                ;
        }
    }
}

