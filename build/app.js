"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config = require("./app.config");
const debug = require("debug");
const http = require("http");
var serverLog = debug('server-log:');
serverLog('ok');
console.log(config);
class Server {
    constructor() {
        this.appConfig = config;
        this.app = express();
        this.init();
    }
    /**
     * 应用程序启动入口
     */
    static bootstrap() {
        return new Server();
    }
    /**
     * 静态文件服务器
     */
    staticPublic() {
        this.app.use(express.static(this.appConfig.staticServer));
    }
    runByHttp() {
        var server = http.createServer(this.app);
        server.listen(this.appConfig.port, () => {
            serverLog('http-server is running on:' + this.appConfig.port);
        });
    }
    runByExpress() {
        this.app.listen(this.appConfig.port, () => {
            serverLog('express-server is running on:' + this.appConfig.port);
        });
    }
    init() {
        this.staticPublic();
        this.runByHttp();
    }
}
exports.Server = Server;
Server.bootstrap();
