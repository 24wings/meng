import * as mongoose from 'mongoose';
import { Restful, MongoField, RestfulFactory } from '../core'


@Restful({
    url: '/rest.recordWeek',
    schemaName: 'RecordWeek',
    schema: {
        peoples: { type: [String], default: [] },
        records: [{ type: String, default: [] }],
        creatDt: { type: Date, default: Date.now },
        finishDt: { type: Date },
        state: { type: Number, default: 0 },
        isActive: { type: Boolean, default: true }
    },
    schemaOption: {

    }

})
export class RecordWeek {
    // _id: String;
    name: String = '';
    records: mongoose.Schema.Types.ObjectId[];
    peoples: String[];

}

export interface IRecordWeek extends RecordWeek, mongoose.Document {

}




