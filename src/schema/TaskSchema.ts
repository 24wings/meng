import * as mongoose from 'mongoose';
import { Restful, MongoField, RestfulFactory } from '../core'


@Restful({
    url: '/rest.task',
    schemaName: 'Task',
    schema: {
        day: { type: Number, default: 0 },
        task: { type: String, default: '默认任务' },
        isFinish: { type: Boolean }
    },
    schemaOption: {

    }
})
export class Record {
    name: String = '';
    toPlayerId: String;
    state: 0 | 1 | 2 | 3 | 4 | 5;

}

export interface IRecord extends Record, mongoose.Document {

}




