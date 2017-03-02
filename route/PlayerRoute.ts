import * as koa from "koa";
import { Route } from '../Route';
import { IRoute } from './interface/Route';
import { playerService } from '../db';
@Route({
    path: '/player'
})
export class PlayerRoute extends IRoute {
    delete() {

    }

    index(ctx: koa.Context, next: koa.Middleware) {
        ctx.body = "index";
    }
    public hello() {

    }
}