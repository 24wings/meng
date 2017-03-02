import { Player, playerSchema } from '../schema';
import { BaseService } from './base/BaseService';
import * as mongoose from 'mongoose';

export class PlayerService<Player extends mongoose.Document> extends BaseService<Player>{

    // private _model: mongoose.Model<mongoose.Document>;
    constructor() {
        super(playerSchema);

    }

    all() {
        return this._model.find().exec();
    }

}  
