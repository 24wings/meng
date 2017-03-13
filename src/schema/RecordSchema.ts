import * as mongoose from 'mongoose';
import { Restful, MongoField, RestfulFactory } from '../core'


@Restful({
    url: '/rest.record',
    schemaName: 'Record',
    schema: {
        playerId: { type: mongoose.Schema.Types.ObjectId, required: true },
        creatDt: { type: Date, default: Date.now },
        lastUpdaeDt: { type: Date, default: Date.now },
        state: { type: Number, default: 0 }, // 0 未参加匹配,1:已经参加匹配但是没有出结果,2:已经参加匹配并且成功匹配上了异性 ,3:已错过当前比赛,不能加入当前比赛,4. 参加了匹配但是没有匹配上,5.正确参与比赛并且完成了比赛
        toPlayerId: { type: String }

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




