"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const path = require("path");
const debug = require("debug");
var serverLog = debug('server-log:');
const core_1 = require("./core");
const Bootstrap_1 = require("./core/Bootstrap");
const route_1 = require("./route");
let Server = class Server {
};
Server = __decorate([
    core_1.App({
        port: 5000,
        routes: [route_1.PlayerRoute, route_1.RecordWeekRoute, route_1.RecordRoute, route_1.TaskRoute],
        bootstrap: Bootstrap_1.BootstrapMethod.Express,
        staticServer: path.resolve(__dirname, '../public'),
        mongoUrl: "mongodb://120.77.169.182/test",
        isAllowCrossDomain: true
    })
], Server);
exports.Server = Server;
Bootstrap_1.bootstrap(Server);
/*
var server = http.createServer((req, res) => {
    // var path = req.url.substring(req.url.indexOf('/'),-1);
    // req.url.
    var zipStream = zlib.createGzip();

    res.writeHead(200, { 'content-encoding': 'gzip' });

    var file = fs.createReadStream(path.resolve(__dirname + '/../public/vendor.bundle.js'));
    file.pipe(zipStream).pipe(res);

}).listen(4000, () => {
    console.log('httpserver on 4000');
})

var app2 = express();
app2.use((req, res, next) => {
    // res.removeHeader()
    var pathname = url.parse(req.url).pathname;
    /**
     * 静态文件根目录
     
    var realPath = path.resolve(__dirname, '../../public/', '.' + pathname);
    console.log(realPath);

    fs.exists(realPath, (isExists) => {

        if (!isExists) {
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.write("This request URL " + pathname + " was not found on this server.");
            res.end();
        } else {
            console.log(realPath);
            fs.readFile(realPath, "binary", function (err, file) {
                console.log(err, file);
                if (err) {
                    res.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });

                    res.end(err);
                } else {
                  
                    var ext = path.extname(realPath);
                    ext = ext ? ext.slice(1) : 'unknown';
                    var contentType = types[ext] || "text/plain";

                    res.writeHead(200, { 'Content-Type': contentType });
                    var raw = fs.createReadStream(realPath);
                    var acceptEncoding = req.headers['accept-encoding'] || "";
                    var matched = ext.match(Compress.match);
                    if (matched && acceptEncoding.match(/\bgzip\b/)) {
                        res.writeHead(200, "Ok", {
                            'Content-Encoding': 'gzip'
                        });
                        raw.pipe(zlib.createGzip()).pipe(res);
                    } else if (matched && acceptEncoding.match(/\bdeflate\b/)) {
                        res.writeHead(200, "Ok", {
                            'Content-Encoding': 'deflate'
                        });
                        raw.pipe(zlib.createDeflate()).pipe(res);
                    } else {
                        res.writeHead(200, "Ok");
                        raw.pipe(res);
                    }
                }
            });
        }
    });
    next();
});


app2.listen(4000, () => {
    console.log('server is runing on' + 4000);
})
*/ 
