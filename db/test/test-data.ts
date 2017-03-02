import { PlayerService } from '../service/PlayerService';

var player = new PlayerService();
async function test() {
    var allPlayer = await player.all();
    var all2 = await player.retrive();
    console.log(allPlayer);
    console.log(all2);

}

setTimeout(test, 3000);
