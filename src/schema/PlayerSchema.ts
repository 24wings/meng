
import * as mongoose from 'mongoose';


interface Player extends mongoose.Document {
    _id: string;
    name: string;
    age: Number;
    isFinishInfo: boolean;

}


export class PlayerSchema {

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
var playerSchema = mongoose.model<Player>("Player", PlayerSchema.schema);
export { playerSchema, Player };