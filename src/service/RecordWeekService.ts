import mongoose = require('mongoose');
import { IService, RestfulFactory } from '../core';
import { IRecordWeek, RecordWeek } from '../schema';

var recordWeekSchema: mongoose.Model<IRecordWeek> = RestfulFactory.getModel(RecordWeek);
export class RecordWeekService extends IService {


    async  newRecordWeek() {
        return new recordWeekSchema({
            isActive: true
        }).save();
    }

    async pushActiveRecord(recordId: string) {
        console.log('recordId:' + recordId)
        var activRecordWeek = await recordWeekSchema.findOne({ isActive: true }).exec();
        activRecordWeek.records.push(<any>recordId)

        return activRecordWeek.update(activRecordWeek).exec();


    }


} 