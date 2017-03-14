import zlib = require("zlib");
import url = require('url');
import fs = require('fs');
import http = require('http');
import { types } from './mime';
import { Compress } from './config';
import path = require('path');

var server = http.createServer((req, res) => {
    var pathname = url.parse(req.url).pathname;
    /**
     * 静态文件根目录
     */
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
                    /**
     * 查找媒体类型
     */
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

});
server.listen(4000, () => {
    console.log('static server is running on:4000');
})