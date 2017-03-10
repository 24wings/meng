import express = require('express');
import { Inject } from '../core/Inject';
import { Route, IRoute } from '../core/Route';
import { PlayerService, RecordService, RecordWeekService } from '../service';

@Inject(PlayerService, RecordService, RecordWeekService)
@Route({
    path: '/player',
    services: [PlayerService, RecordService, RecordWeekService]
})
export class PlayerRoute extends IRoute {
    constructor(
        public playerService: PlayerService,
        public recordService: RecordService,
        public recordWeekService: RecordWeekService) {
        super();
        /**
         * 
         * case "getPlayerByPhone":
                return this.getPlayerByPhone;
            case "getPlayerInfo":
                return this.getPlayerInfo;
            case "addPlayer":
                return this.addPlayer;
            case "isFinishInfo":
                return this.isFinishInfo;
            case "allRadioQuestions":
                return this.allRadioQuestions;
            case "allAnwserQuestions":
                return this.allAnwserQuestions;
            case "submitQuestions":
                return this.submitQuestions;
            case "allGirls":
                return this.allGirls;
            default:
                return this.notFound;
         */

        var actions = [this.allPlayer, this.getPlayerByPhone, this.getPlayerInfo]
    }
    async state(req: express.Request, res: express.Response, ) {
        var _id = req.query._id;
        if (req.query._id) {
            var player = await this.playerService.getPlayerInfo({ _id });
            var currentRecord = await this.playerService.getCurrentRecord(player.currentRecord);
            // var toPlayer = await this.playerService.getPlayerInfo({ _id: currentRecord.toPlayerId });
            res.json({
                issuccess: true,
                data: {
                    player: player,
                    currentRecord: currentRecord,
                    // toPlayer: toPlayer
                }
            });
        } else {
            res.json({
                issuccess: false,
                data: '参数不非法'
            })

        }

    }

    async newPlayer(req: express.Request, res: express.Response) {
        if (req.method.toUpperCase() === 'OPTIONS') {
            res.json({
                issuccess: true,
                data: 'options'
            });
        } else {
            var player = req.body;
            /**
             * 1.创建新用户
             */
            var savePlayerResult = await this.playerService.newPlayer(player);

            /**
             * 2.创建临时记录
             */
            var newRecord = await this.recordService.newRecord(savePlayerResult._id);
            try {
                var joinPartyResult = await this.playerService.joinParty(savePlayerResult._id);
            } catch (e) {

                await newRecord.update({ state: 3 }).exec()
                /**
                 * 当活动已经处于开始状态的时候,
                 *  此时将用户的记录状态该为已错过
                 */

            }
            /**
             * 3.更新用户的当前记录
             */
            var updatePlayerRecordResult = this.playerService.updatePlayerRecord({ _id: savePlayerResult._id }, newRecord._id);

            res.json({
                issuccess: true,
                data: savePlayerResult
            });
        }



    }
    async isFinishInfo(req: express.Request, res: express.Response) {
        var player = await this.playerService.getPlayerInfo({ phone: req.query.phone });
        if (player) {
            res.json({
                issuccess: true,
                data: {
                    // isFinishInfo: player.isFinishInfo
                }
            });
        } else {
            res.json({
                issuccess: false,
                data: {
                    isFinishInfo: false,
                },
                errorMsg: '不存在的玩家'
            });
        }



    }
    async getPlayerInfo(req: express.Request, res: express.Response) {
        var info = await this.playerService.getPlayerInfo({ phone: req.query.phone });
        res.json({
            issuccess: true,
            data: info
        });

    }

    async allPlayer(req: express.Request, res: express.Response) {
        var players = await this.playerService.allPlayer();
        res.json({
            issuccess: true,
            data: players
        });

    }

    async getPlayerByPhone(req: express.Request, res: express.Response) {


    }
    async currentRecord(req: express.Request, res: express.Response) {
        var _id = req.query._id;
        var result;
        if (_id) {
            result = await this.playerService.getPlayerInfo({ _id: _id });
            console.log(result);

            var record = await this.playerService.getCurrentRecord(result.currentRecord);
            console.log('record', record);
            res.json({
                issuccess: true,
                data: record
            });
        } else {
            res.json({
                issuccess: false,
                data: '参数不合法'
            })
        }
    }

}