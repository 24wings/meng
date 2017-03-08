import * as mongoose from 'mongoose';
import { Restful, MongoField, RestfulFactory } from '../core'


@Restful({
    url: '/rest.recordWeek',
    schemaName: 'RecordWeek',
    schema: {
        records: [{ type: mongoose.Schema.Types.ObjectId, default: [] }],
        creatDt: { type: Date, default: Date.now },
        finishDt: { type: Date },
        isActive: { type: Boolean, default: true }
    },
    schemaOption: {

    }

})
export class RecordWeek {
    name: String = '';
    records: mongoose.Schema.Types.ObjectId[];

}

export interface IRecordWeek extends RecordWeek, mongoose.Document {

}




