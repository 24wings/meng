import mongoose = require('mongoose');

import { IService, RestfulFactory } from '../core';
import { recordWeekSchema, playerSchema, recordSchema, IRecordWeek } from '../schema';





export class RecordWeekService extends IService {


    async  newRecordWeek() {
        /**
         * 自动将所有的函数拿来调用
         */
        var allPlayer = await playerSchema.find().exec();
        var peoples = allPlayer.map(player => player._id);
        await recordSchema.update({}, { state: 0 }).exec();
        /**
         * 把所有记录全部存进去
         */


        return new recordWeekSchema({

            isActive: true,
            state: 0,
            peoples: peoples
        }).save();
    }

    async pushActiveRecord(recordId: string) {
        console.log('recordId:' + recordId)
        var activRecordWeek = await recordWeekSchema.findOne({ isActive: true }).exec();
        activRecordWeek.records.push(<any>recordId);
        return activRecordWeek.update(activRecordWeek).exec();
    }
    async finish(weekRecord: IRecordWeek) {
        await recordSchema.find().update({}, { $set: { state: 0 } }).exec();
        return recordWeekSchema.findOneAndUpdate({ _id: weekRecord._id }, weekRecord).exec();


    }

    updateRecordStateTo(to: 0 | 1 | 2 | 3 | 4 | 5) {
        return recordSchema.find().update({
            $set: {
                state: 0
            }
        }).exec();
    }


} 