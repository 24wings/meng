import { PlayerService } from './PlayerService';
import { RecordWeekService } from './RecordWeekService';
import { RecordService } from './RecordService';

var playerService = new PlayerService();
var recordWeekService = new RecordWeekService();
var recordService = new RecordService();
export {
    playerService, PlayerService,
    recordService, RecordService,
    recordWeekService, RecordWeekService
}