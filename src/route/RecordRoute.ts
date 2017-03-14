import express = require('express');

import { Route, IRoute } from '../core/Route';
import { RecordService, PlayerService, RecordWeekService, recordService, playerService, recordWeekService } from '../service';


@Route({
    path: '/record',
    services: []
})
export class RecordRoute extends IRoute {
    constructor(
        public recordService: RecordService,
        public playerService: PlayerService,
        public recordWeekService: RecordWeekService) {
        super();

    }

    async newRecord(req: express.Request, res: express.Response) {
        var playerid;
        if (req.query._id) {
            playerid = req.query._id
        } else {
            res.json({
                issuccess: false,
                data: '参数不合法'
            });
            return;
        }
        /**
         * 1.生成一条参与活动的记录
         * 2.参与者本身的当前记录也要更新
         */
        var newRecord = await recordService.newRecord(playerid);

        var actionResult = await recordWeekService.pushActiveRecord(newRecord._id);
        var result = await playerService.updatePlayerRecord({ _id: playerid }, newRecord._id);
        console.log(newRecord, actionResult, result);
        res.json({
            issuccess: true,
            data: result
        });




    }




}