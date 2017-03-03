"use strict";
import 'reflect-metadata';
import * as bodyParser from "body-parser";
import * as express from "express";
import * as koa from 'koa';
import * as Router from 'koa-router';
import * as path from "path";
import { PlayerRoute, HeroRoute } from './route/index';
import { allRoutes } from './route';
import sha1 = require('sha1');

/**
 * The server.
 *
 * @class Server
 */
export class Server {

    public static app: koa;
    /**
       * 路由组件
       */
    static routes: any[] = [];



    private static token: String = "wanvivweixin";
    /**
     * Bootstrap the application.
     */
    public static bootstrap(): Server {
        return new Server();
    }
    /**
     * 处理根请求
     * @param req 
     * @param res 
     */
    indexGet(req: express.Request, res: express.Response) {
        /**
         * 微信加密签名
         * 时间戳
         * 随机数
         *  随机字符串
         */
        var { signature, timestamp, nonce, echostr } = req.query;
        if (Server.checkSignature(signature, timestamp, nonce)) {
            res.end(echostr);
        }

    }
    static get allRoutes() {
        return [PlayerRoute, HeroRoute];
    }

    indexPost(req: Express.Request, res: Express.Response) {

    }

    static checkSignature(signature: string, timestamp: string, nonce: string): boolean {
        var arr: String[] = [Server.token, timestamp, nonce];
        arr.sort();
        var result = arr.join();
        var tempResult = sha1(result);
        return (!tempResult) ? tempResult == signature.toUpperCase() : false;


    }



    /**
     * Constructor.
     *
     */
    constructor() {
        //create expressjs application
        Server.app = new koa();
        var router = new Router();
        Server.allRoutes.forEach(MiddleRoute => {
            var routeOptions = Reflect.getMetadata('route', MiddleRoute);
            console.log(MiddleRoute, routeOptions);
            var middleRoute = new MiddleRoute();
            var routes = Object.getOwnPropertyNames(MiddleRoute.prototype);
            var tempRouter = new Router();

            routes.forEach((route) => {
                tempRouter.get(`${routeOptions.path}/${route}`, middleRoute[route])

            });
            Server.app.use(tempRouter.routes());
            Server.app.use(router.allowedMethods());
        });
        router.get('/', async (ctx, next) => {
            ctx.body = 'hello';
            next();
        });
        Server.app.use(router.routes());
        Server.app.use(router.allowedMethods());
        //

        Server.app.listen(3000, () => {
            console.log(3000);
        });
    }
}

Server.bootstrap();