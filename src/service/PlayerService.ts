import mongoose = require('mongoose');
import { IService, RestfulFactory } from '../core';
import { IPlayer, Player } from '../schema';

var playerSchema: mongoose.Model<IPlayer> = RestfulFactory.getModel(Player);
export class PlayerService extends IService {
    async allPlayer() {
        return playerSchema.find().exec();
    }
    async getPlayerInfo(query: { phone?: number }) {
        return playerSchema.findOne(query).exec();
    }


}