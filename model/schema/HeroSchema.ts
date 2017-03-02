import { DataAccess } from '../dataAccess';
import * as mongoose from 'mongoose';
var dbInstance = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

interface Hero extends mongoose.Document {
    power: string;
    amountPeopleSaved: number;
    name: string;
}


class HeroModel {

    private _heroModel: Hero;

    constructor(heroModel: Hero) {
        this._heroModel = heroModel;
    }
    get name(): string {
        return this._heroModel.name;
    }

    get power(): string {
        return this._heroModel.power;
    }

    get amountPeopleSaved(): number {
        return this._heroModel.amountPeopleSaved;
    }


}
Object.seal(HeroModel);


class HeroSchema {

    static get schema() {
        var schema = new mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            power: {
                type: String,
                required: true
            },
            amountPeopleSaved: {
                type: Number,
                required: true
            }
        });

        return schema;
    }

}
var schema = mongooseConnection.model<Hero>("Heroes", HeroSchema.schema);
export { schema, HeroModel, Hero }