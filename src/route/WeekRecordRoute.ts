import mongoose = require('mongoose');
import express = require('express');
import { Inject } from '../core/Inject';
import { Route, IRoute } from '../core/Route';
import { RecordWeekService, PlayerService, RecordService } from '../service';
import { RestfulFactory } from '../core';
import { IPlayer, Player, playerSchema, recordWeekSchema, RecordWeek, IRecordWeek } from '../schema';



@Inject(RecordWeekService, PlayerService, RecordService)
@Route({
    path: '/recordWeek',
    services: [RecordWeekService, PlayerService, RecordService]
})
export class RecordWeekRoute extends IRoute {
    constructor(
        public recordWeekService: RecordWeekService,
        public playerService: PlayerService,
        public recordService: RecordService) {
        super();
        var actions = [this.newRecordWeek];
    }

    async all(req: express.Request, res: express.Response) {
        var _id = req.query._id
        var result = await recordWeekSchema.findOne({ _id }).exec();
        console.log(result);
        var peoplesQuery = result.peoples.map(people => {
            return { _id: people };
        });
        console.log(peoplesQuery);
        var peoples = await playerSchema.find().and(peoplesQuery).exec();


        res.json({
            issuccess: true,
            data: result,
            peoples: peoples
        });

    }

    async newRecordWeek(req: express.Request, res: express.Response) {
        var result = await this.recordWeekService.newRecordWeek();
        /**
         * 将数据库每个人的当前状态存入以前的状态
         * 
         */
        var allPlayer = await this.playerService.allPlayer();
        for (var i = 0; i < allPlayer.length; i++) {
            var player = allPlayer[i];
            console.log(player);
            player.records.push(player.currentRecord);
            var newRecord = await this.recordService.newRecord(player._id);
            player.currentRecord = newRecord._id;
            await playerSchema.update({ _id: player._id }, player).exec();
            // await  


        }
        res.json({
            issuccess: true,
            data: result
        });
    }
    async finish(req: express.Request, res: express.Response) {
        var weekRecord = req.body;
        var result = await this.recordWeekService.finish(weekRecord);
        res.json({
            issuccess: true,
            data: result
        });
    }

}