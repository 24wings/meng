
import { injectable, inject } from "inversify";
import "reflect-metadata";

interface Warrior {
    fight(): string;
    sneak(): string;
}

interface Weapon {
    hit(): string;
}

interface ThrowableWeapon {
    throw(): string;
}


let TYPES = {
    Warrior: Symbol("Warrior"),
    Weapon: Symbol("Weapon"),
    ThrowableWeapon: Symbol("ThrowableWeapon")
};

export { TYPES };




@injectable()
class Katana implements Weapon {
    public hit() {
        return "cut!";
    }
}

@injectable()
class Shuriken implements ThrowableWeapon {
    public throw() {
        return "hit!";
    }
}




@injectable()
class Ninja implements Warrior {
    @inject(TYPES.Weapon) private _katana: Weapon;
    @inject(TYPES.ThrowableWeapon) private _shuriken: ThrowableWeapon;
    public fight() { return this._katana.hit(); };
    public sneak() { return this._shuriken.throw(); };
}


import { Container } from "inversify";


var myContainer = new Container();
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { myContainer };



var ninja = myContainer.get<Warrior>(TYPES.Warrior);
console.log(ninja.fight());

