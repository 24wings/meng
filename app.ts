"use strict";
import 'reflect-metadata';
import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import { HeroRoute } from './route/HeroRoute';
import { PlayerRoute } from './route/PlayerRoute';
import sha1 = require('sha1');
/**
 * The server.
 *
 * @class Server
 */
class Server {

    public app: express.Application;
 private static  token:String = "wanvivweixin";
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
    indexGet(req:express.Request,res:express.Response){
        /**
         * 微信加密签名
         * 时间戳
         * 随机数
         *  随机字符串
         */
        var {signature,timestamp,nonce,echostr} =req.query;
        if(Server.checkSignature(signature,timestamp,nonce)){
            res.end(echostr);
        }

    }

    indexPost(req:Express.Request,res:Express.Response){

    }

    static checkSignature(signature:string,timestamp:string,nonce:string):boolean{
          var arr:String[] = [ Server.token, timestamp, nonce ];
          arr.sort();
       var result =   arr.join();
       var tempResult =sha1(result);
      return (!tempResult)?tempResult==signature.toUpperCase():false;


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
            var route = new Route();
            
            var secondRoutes = Object.getOwnPropertyNames(Route.prototype);
        
            secondRoutes.forEach(secondRoute => {
                if (secondRoute == 'constructor') { return; }
                else {
                    console.log(`扫描到二级路由: ${routeOption.path}  / ${route[secondRoute]}`)
                    tempApp.use(`${routeOption.path}/${route[secondRoute].name}`, route[secondRoute]);
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
