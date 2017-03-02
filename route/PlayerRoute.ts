import * as express from "express";
import { Route } from '../Route';
import { IRoute } from './interface/Route';
import { playerService } from '../db';
@Route({
    path: '/player'
})
export class PlayerRoute extends IRoute {
    delete(){

    }

    async index(req: express.Request, res: express.Response, next: express.NextFunction) {
        
       var all =await playerService.all();
       res.json(all);
    }
    public hello() {

    }
}