import * as mongoose from 'mongoose';
import { Restful, MongoField, RestfulFactory } from '../core'


@Restful({
    url: '/rest.record',
    schemaName: 'Record',
    schema: {
        playerId: { type: mongoose.Schema.Types.ObjectId, required: true },
        creatDt: { type: Date, default: Date.now },
        lastUpdaeDt: { type: Date, default: Date.now },
        state: { type: Number, default: 0 },
        toPlayerId: { type: mongoose.Schema.Types.ObjectId }

    },
    schemaOption: {

    }

})
export class Record {
    name: String = '';

}

export interface IRecord extends Record, mongoose.Document {

}




