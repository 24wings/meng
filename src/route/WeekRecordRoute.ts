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
        var peoples = await playerSchema.find(peoplesQuery).exec();


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

    async publish(req: express.Request, res: express.Response) {
        /**
         * 发布 结果
         * 更新 所有 匹配人的结果 
         *  * 已经匹配的人 互相更新当前状态，将当前记录的匹配人改为匹配对象
         *  * 未匹配的人 互相更新当前状态,将当前记录的匹配状态改为已落单
         * 
         * 更新任务状态, 
         * *发布
         * * 改为任务状态
         * *第三个状态为 到结束状态
         */
        var data = req.body;
        /**
         * 1.将已经匹配的人更新为匹配对象
         */
        if (data.matchPairs instanceof Array && data.looseMatchBoys instanceof Array) {
            var matchPairs: { boy: IPlayer, girl: IPlayer }[] = data.matchPairs;
            var looseMatchBoys: IPlayer[] = data.looseMatchBoys;
            for (var i = 0; i < matchPairs.length; i++) {
                var pair = matchPairs[i];
                /**
                 * 2. 已经匹配的人将匹配状态修改 
                 */
                var updateBoyRecordAction = await this.recordService.updateRecordToPlayerId(pair.boy.currentRecord, pair.girl._id, 2);
                var updateGirlRecordAction = await this.recordService.updateRecordToPlayerId(pair.girl.currentRecord, pair.boy._id, 2);

            }
            /**
             * 3. 将落单的人数据状态设置
             */
            for (var i = 0; i < looseMatchBoys.length; i++) {
                var looseBoy = looseMatchBoys[i];
                var updateLooseBoyAction = await this.recordService.updateRecordToPlayerId(looseBoy.currentRecord, '', 4);
            }

            /**
             * 4。　将认为状态改为  　正在进行     
             *   wekRecord 的状态字段state
             *  *  0  自动生成的 报名阶段
             *  *  1   任务阶段
             *  * 2  结束阶段
             *  类似于数据库的表示状态的字段,通常用enum 或者 注释来提示每个字段的含义会是更好的编程风格
             */
            let updateResult = await recordWeekSchema.update({ isActive: true }, {
                state: 1,
                isActive: false
            }).exec();

            res.json({
                issuccess: true,
                data: {
                    updateBoyRecordAction: updateBoyRecordAction,
                    updateGirlRecordAction: updateGirlRecordAction,
                    updateResult: updateResult,
                    updateLooseBoyAction: updateLooseBoyAction
                }
            });


        } else {
            res.json(
                {
                    issuccess: false,
                    data: '参数不合法'
                }
            )
        }

        res.json({
            issuccess: true,
            data: data
        });

    }

}