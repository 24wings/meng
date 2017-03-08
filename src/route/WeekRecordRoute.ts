import express = require('express');
import { Inject } from '../core/Inject';
import { Route, IRoute } from '../core/Route';
import { RecordWeekService } from '../service';

@Inject(RecordWeekService)
@Route({
    path: '/recordWeek',
    services: [RecordWeekService]
})
export class RecordWeekRoute extends IRoute {
    constructor(public recordWeekService: RecordWeekService) {
        super();
        var actions = [this.newRecordWeek];
    }
    async newRecordWeek(req: express.Request, res: express.Response) {
        var result = await this.recordWeekService.newRecordWeek();
        res.json({
            issuccess: true,
            data: result
        });
    }

}