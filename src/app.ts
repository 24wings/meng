import 'reflect-metadata';
import express = require('express');
import config = require('./app.config');
import path = require('path');
import debug = require('debug');
import http = require('http');
var serverLog = debug('server-log:');
import { App, AppOptions } from './core/App';
import { bootstrap, BootstrapMethod } from './core/Bootstrap';

import { PlayerRoute, RecordWeekRoute, RecordRoute } from './route';



@App({
    port: 3000,
    routes: [PlayerRoute, RecordWeekRoute, RecordRoute],
    bootstrap: BootstrapMethod.Express,
    staticServer: path.resolve(__dirname, '../public'),
    mongoUrl: "mongodb://120.77.169.182/test",
    isAllowCrossDomain: true
})
export class Server {
}

bootstrap(Server);      