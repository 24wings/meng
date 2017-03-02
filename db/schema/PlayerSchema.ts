import { DataAccess } from '../dataAccess';
import * as mongoose from 'mongoose';
var dbInstance = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

interface Player extends mongoose.Document {
    _id: string;
    name: string;
    age: Number;

}




class PlayerSchema {

    static get schema() {
        var schema = new mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            phone: {
                type: Number,
                required: true
            }
        });

        return schema;
    }

}
var playerSchema = mongooseConnection.model<Player>("Player", PlayerSchema.schema);
export { playerSchema, Player }