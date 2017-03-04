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
    }

    async allPlayer(req: express.Request, res: express.Response) {
        var players = await this.playerService.allPlayer();
        res.json({
            issuccess: true,
            data: players
        });

    }

}