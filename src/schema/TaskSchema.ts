import * as mongoose from 'mongoose';
import { Restful, MongoField, RestfulFactory } from '../core'


@Restful({
    url: '/rest.task',
    schemaName: 'Task',
    schema: {
        time: { type: Number, default: 0 },
        title: { type: String, default: '默认任务' },
        description: { type: String },
        isFinish: { type: Boolean }
    },
    schemaOption: {

    }
})
export class Task {
    time: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    title: String;
    description: String;
    isFinish: boolean;

}

export interface ITask extends Task, mongoose.Document {

}




