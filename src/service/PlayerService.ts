import mongoose = require('mongoose');
import { IService, RestfulFactory } from '../core';
import { IPlayer, Player } from '../schema';

var playerSchema: mongoose.Model<IPlayer> = RestfulFactory.getModel(Player);
export class PlayerService extends IService {
    async allPlayer() {
        return playerSchema.find().populate('[tags]').exec();
    }
    async getPlayerInfo(query: { phone?: number }) {
        return playerSchema.findOne(query).exec();
    }

    updatePlayerRecord(query: Object, _id: String) {
        return playerSchema.update(query, { currentRecord: _id }).exec()
    }


}