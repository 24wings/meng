import { DataAccess } from '../dataAccess';
import * as mongoose from 'mongoose';
var dbInstance = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

interface Player extends mongoose.Document {
    power: string;
    amountPeopleSaved: number;
    name: string;
}


class PlayerModel {

    private _playerModel: Player;

    constructor(playerModel: Player) {
        this._playerModel = playerModel;
    }
    get name(): string {
        return this._playerModel.name;
    }

    get power(): string {
        return this._playerModel.power;
    }

    get amountPeopleSaved(): number {
        return this._playerModel.amountPeopleSaved;
    }


}
Object.seal(PlayerModel);


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
var schema = mongooseConnection.model<Player>("Player", PlayerSchema.schema);
export { schema, PlayerModel, Player }