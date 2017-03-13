import mongoose = require('mongoose');
import { IService, RestfulFactory } from '../core';
import { IPlayer, Player, Record, IRecord, playerSchema, recordSchema, recordWeekSchema } from '../schema';



export class PlayerService extends IService {
    async allPlayer() {
        return playerSchema.find().exec();
    }
    async getPlayerInfo(query: Object) {
        return playerSchema.findOne(query).exec();
    }

    async updatePlayerRecord(query: Object, currentRecordId: String) {
        return playerSchema.update(query, { currentRecord: currentRecordId }).exec()
    }

    async  getCurrentRecord(currentRecord: string) {
        return recordSchema.findById({ _id: currentRecord }).exec();


    }

    async newPlayer(player: Player) {
        return new playerSchema(player).save();

    }

    isExisit(query: Object) {
        return playerSchema.findOne(query).exec().then(function (player) {
            console.log(player);
            return player ? true : false;
        });

    }

    /**
     * 新用户参与记录
     * @param query 
     */
    async joinParty(playerId: String) {
        /**
         * 1.查询当前活跃的活动
         */
        var activeParty = await recordWeekSchema.findOne({ isActive: true }).exec();
        if (activeParty) {
            return activeParty.update({
                $push: {
                    peoples: playerId
                }
            }).exec();

        } else {
            throw new Error('没有活跃的用户');
        }




    }


}