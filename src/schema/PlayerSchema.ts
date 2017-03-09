import * as mongoose from 'mongoose';
import { Restful, MongoField, RestfulFactory } from '../core'


@Restful({
    url: '/rest.player',
    schemaName: 'Player',
    schema: {
        currentRecord: { type: String },
        records: { type: [String], default: [] },
        name: { type: String, default: '昵称' },
        gender: { type: String, default: '男' },
        phone: { type: String },
        password: { type: String },
        tags: { type: [{ tagName: String, result: [String], options: [String] }] },
        age: Number,
        height: Number,

        anwsers: {
            type: [{
                question: String,
                value: String
            }]
        },
        creatDt: { type: Date, default: Date.now },
        filterAge: {
            type: {
                label: String,
                value: String
            }
        },
        filterGender: {
            type: {
                label: String,
                value: String
            }
        },
        filterCity: {
            label: String,
            value: String
        }

    },
    schemaOption: {

    }

})
export class Player {
    name: String = '';
    currentRecord = '';
    records: String[];

}

export interface IPlayer extends Player, mongoose.Document {

}




