
import express = require('express');
import config = require('./app.config');
import debug = require('debug');
import http = require('http');
var serverLog = debug('server-log:');

serverLog('ok');
console.log(config);
export class Server {
    appConfig = config;
    app: express.Application;
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
    constructor() {
        this.app = express();
        this.init();

    }

    init() {

        this.staticPublic();
        this.runByHttp();
    }



}

Server.bootstrap();  