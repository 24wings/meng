import * as mongoose from 'mongoose';
import { Restful, MongoField, RestfulFactory } from '../core'


@Restful({
    url: '/rest.record',
    schemaName: 'Record',
    schema: {
        playerId: { type: mongoose.Schema.Types.ObjectId, required: true },
        creatDt: { type: Date, default: Date.now },
        lastUpdaeDt: { type: Date, default: Date.now },
        state: { type: Number, default: 0 }, // 0 未匹配,1:已经匹配,2:已结束 ,3:已错过,4. 已离开
        toPlayerId: { type: String }

    },
    schemaOption: {

    }

})
export class Record {
    name: String = '';
    toPlayerId: String;
    state: 0 | 1 | 2 | 3 | 4;

}

export interface IRecord extends Record, mongoose.Document {

}




