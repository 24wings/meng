import { Player, schema } from '../schema/PlayerSchema';
import { RepositoryBase } from './ResponsitoryBase';

export class PlayerRespository extends RepositoryBase<Player> {
    constructor() {
        super(schema);
    }

}  
