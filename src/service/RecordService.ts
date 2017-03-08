import mongoose = require('mongoose');
import { IService, RestfulFactory } from '../core';
import { IRecord, Record, Player, IPlayer, RecordWeek, IRecordWeek } from '../schema';

var recordSchema: mongoose.Model<IRecord> = RestfulFactory.getModel(Record);
var playerSchema: mongoose.Model<IPlayer> = RestfulFactory.getModel(Player);

var recordWeekSchema: mongoose.Model<IRecordWeek> = RestfulFactory.getModel(RecordWeek);

export class RecordService extends IService {


    async  newRecord(_id: String) {
        return new recordSchema({
            playerId: _id
        }).save();
    }


}