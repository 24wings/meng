import mongoose = require('mongoose');
import { IService } from '../core';
import { playerSchema, Player } from '../schema';
export class PlayerService extends IService {
    async allPlayer() {
        return playerSchema.find().exec();
    }
    async getPlayerInfo(query: { phone?: number }) {
        return playerSchema.findOne(query).exec();
    }


}