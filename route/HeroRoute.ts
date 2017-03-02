import * as express from "express";
import { Route } from '../Route';
import { IRoute } from './interface/Route';
import {playerService} from '../db/service/index';
@Route({
    path: '/hero'
})
export class HeroRoute extends IRoute {

    async  index(req: express.Request, res: express.Response, next: express.NextFunction) {
        
     var docs =   await playerService.retrive();
     res.json(docs);

    }
    public hello() {

    }
}