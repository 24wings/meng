import mongoose = require('mongoose');
import { IService, RestfulFactory } from '../core';
import { IPlayer, Player, Record, IRecord, playerSchema, recordSchema } from '../schema';



export class PlayerService extends IService {
    async allPlayer() {
        return playerSchema.find().exec();
    }
    async getPlayerInfo(query: Object) {
        return playerSchema.findOne(query).exec();
    }

    async updatePlayerRecord(query: Object, _id: String) {
        return playerSchema.update(query, { currentRecord: _id }).exec()
    }

    async  getCurrentRecord(currentRecord: string) {
        return recordSchema.findById({ _id: currentRecord }).exec();


    }


}