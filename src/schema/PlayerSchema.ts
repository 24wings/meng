import * as mongoose from 'mongoose';
import { Restful, MongoField, RestfulFactory } from '../core'


@Restful({
    url: '/rest.player',
    schemaName: 'Player',
    schema: {
        name: String
    },
    schemaOption: {

    }

})
export class Player {
    name: String = '';

}

export interface IPlayer extends Player, mongoose.Document {

}




