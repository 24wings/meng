import zlib = require('zlib');
import fs = require('fs');
import url = require('url');
import { AppOptions } from './App';
import debug = require('debug');
import compression = require('compression');
import express = require('express');
import bodyParser = require('body-parser');
import mongoose = require('mongoose');
import http = require('http');
import path = require('path');
import { IService } from './Service';

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
        this.compress();
        this.staticPublic();
        // this.gzipServer();
        this.allowCrossDomain(this.appOptions.isAllowCrossDomain);
        this.bodyParser();

        this.connectMongo(this.appOptions.mongoUrl);
        this.appOptions.bootstrap == BootstrapMethod.HTTP ? this.runByHttp() : this.runByExpress();
        this.schemaRestful();




    }
    compress() {
        this.app.use(compression());
    }
    bodyParser() {

        this.app.use(bodyParser.text());
        this.app.use(bodyParser.json({ limit: '5mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

    }
    /**
     * 静态文件服务器
     */
    staticPublic() {

        this.app.use(express.static(this.appOptions.staticServer, {
            /* setHeaders: (res, paths, state) => {
 
                 res.writeHead(200, { 'content-encoding': 'gzip' });
 
                 var zipStream = zlib.createGzip();
                 var file = fs.createReadStream(path.resolve(__dirname + '/../../public/vendor.bundle.js'));
                 file.pipe(zipStream).pipe(res);
 
             }
             */


        }));
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

