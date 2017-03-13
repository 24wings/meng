import 'reflect-metadata';
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


setTimeout(
    () => {
        // var recordSchema: mongoose.Model<IRecord> = RestfulFactory.getModel(Record);
        // recordSchema.find().remove().exec();                                            
    }

    , 5000);