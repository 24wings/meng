import { Hero, schema } from '../schema/HeroSchema';
import { RepositoryBase } from './ResponsitoryBase';

export class HeroRespository extends RepositoryBase<Hero> {
    constructor() {
        super(schema);
    }

}  
