import express = require('express');
import { playerService, recordService, recordWeekService, PlayerService } from '../service';
import { taskSchema } from '../schema/index';
import { Route, Inject } from '../core';

@Inject(PlayerService)
@Route({
    path: '/task',
    services: [PlayerService]
})
export class TaskRoute {

    async getTask(req: express.Request, res: express.Response) {
        var _id = req.query._id;
        /**
         * 获取当前星期几
         * 对应数据库的 
         *  * 0  星期一
         *  * 1 星期二
         *  * 2  星期三
         *  * 3 星期四
         *  * 4 星期五
         *  * 5 星期六
         *  * 6 星期天
         */
        var currentDay = new Date().getDay() - 1;

        var task = await taskSchema.findOne({ time: currentDay }).exec()
        res.json({
            issuccess: true,
            data: task
        });

    }
    finishTask(req: express.Request, res: express.Response) {


    }




}