import express = require('express');
import { Inject } from '../core/Inject';
import { Route, IRoute } from '../core/Route';
import { PlayerService } from '../service';

@Inject(PlayerService)
@Route({
    path: '/player',
    services: [PlayerService]
})
export class PlayerRoute extends IRoute {
    constructor(public playerService: PlayerService) {
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

}