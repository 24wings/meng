import * as express from "express";
import { Route } from '../Route';
import { IRoute } from './interface/Route';
import { HeroRespository } from '../model/respository/HeroResponsiitory';
@Route({
    path: '/hero'
})
export class HeroRoute extends IRoute {

    public index(req: express.Request, res: express.Response, next: express.NextFunction) {
        var heroResponsiitory = new HeroRespository();
        heroResponsiitory.retrieve((err, result) => {
            if (err) return;
            else {
                console.log(err);
                res.json(result);
            }
        })
    }
    public hello() {

    }
}