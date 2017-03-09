import express = require('express');
import { Inject } from '../core/Inject';
import { Route, IRoute } from '../core/Route';
import { RecordService, PlayerService, RecordWeekService } from '../service';

@Inject(RecordService, PlayerService, RecordWeekService)
@Route({
    path: '/record',
    services: [RecordService, PlayerService, RecordWeekService]
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
        var newRecord = await this.recordService.newRecord(playerid);

        var actionResult = await this.recordWeekService.pushActiveRecord(newRecord._id);
        var result = await this.playerService.updatePlayerRecord({ _id: playerid }, newRecord._id);
        console.log(newRecord, actionResult, result);
        res.json({
            issuccess: true,
            data: result
        });




    }




}