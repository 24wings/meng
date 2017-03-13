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
        port: 3000,
        routes: [route_1.PlayerRoute, route_1.RecordWeekRoute, route_1.RecordRoute, route_1.TaskRoute],
        bootstrap: Bootstrap_1.BootstrapMethod.Express,
        staticServer: path.resolve(__dirname, '../public'),
        mongoUrl: "mongodb://120.77.169.182/test",
        isAllowCrossDomain: true
    })
], Server);
exports.Server = Server;
Bootstrap_1.bootstrap(Server);
setTimeout(() => {
    // var recordSchema: mongoose.Model<IRecord> = RestfulFactory.getModel(Record);
    // recordSchema.find().remove().exec();                                            
}, 5000);
