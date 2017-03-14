import 'reflect-metadata';
import compression = require('compression');
import './test';
import { Compress } from './test/config';
import { types } from './test/mime';

import url = require('url');
import zlib = require('zlib');
import fs = require('fs');
import mongoose = require('mongoose');
import express = require('express');
import config = require('./app.config');
import path = require('path');
import debug = require('debug');
import http = require('http');

var serverLog = debug('server-log:');
import { App, AppOptions, RestfulFactory } from './core';
import { recordWeekSchema, recordSchema, IRecord, Record } from './schema';
import { bootstrap, BootstrapMethod } from './core/Bootstrap';

import { PlayerRoute, RecordWeekRoute, RecordRoute, TaskRoute } from './route';



@App({
    port: 3000,
    routes: [PlayerRoute, RecordWeekRoute, RecordRoute, TaskRoute],
    bootstrap: BootstrapMethod.Express,
    staticServer: path.resolve(__dirname, '../public'),
    mongoUrl: "mongodb://120.77.169.182/test",
    isAllowCrossDomain: true
})
export class Server {
}

bootstrap(Server);

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