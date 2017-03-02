import * as express from "express";
import { Route } from '../Route';
import { IRoute } from './interface/Route';
import { PlayerRespository } from '../model/respository/PlayerResponsitory';
@Route({
    path: '/player'
})
export class PlayerRoute extends IRoute {

    public index(req: express.Request, res: express.Response, next: express.NextFunction) {
        var palyerResponsitory = new PlayerRespository();
        palyerResponsitory.retrieve((err, result) => {
            if (err) {
                console.log('返回的错误', err);
                return;
            }
            else {
                console.log('返回的结果', result);
                res.json(result);
            }
        })
    }
    public hello() {

    }
}