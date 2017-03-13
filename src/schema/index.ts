import mongoose = require('mongoose');
import { RestfulFactory } from '../core/index';
import { IPlayer, Player } from './PlayerSchema';
import { IRecordWeek, RecordWeek } from './RecordWeekSchema';
import { IRecord, Record } from './RecordSchema';
import { Task, ITask } from './TaskSchema';

var playerSchema: mongoose.Model<IPlayer> = RestfulFactory.getModel(Player);
var recordSchema: mongoose.Model<IRecord> = RestfulFactory.getModel(Record);
var recordWeekSchema: mongoose.Model<IRecordWeek> = RestfulFactory.getModel(RecordWeek);
var taskSchema: mongoose.Model<ITask> = RestfulFactory.getModel(Task);
export {
    IPlayer, Player, playerSchema,
    IRecord, Record, recordSchema,
    RecordWeek, IRecordWeek, recordWeekSchema,
    Task, ITask, taskSchema
};
