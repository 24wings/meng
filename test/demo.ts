export class Pencil {
    public printName() {
        console.log('this is a pencil');
    }
}

export class Eraser {
    public printName() {
        console.log('this is an eraser');
    }
}

export class Notebook {
    public printName() {
        console.log('this is a notebook');
    }
}
/*
export class Student {
    pencil: Pencil;
    eraser: Eraser;
    notebook: Notebook;
    public constructor(notebook: Notebook, pencil: Pencil, eraser: Eraser) {
        this.notebook = notebook;
        this.pencil = pencil;
        this.eraser = eraser;
    }
    public write() {
        if (!this.notebook || !this.pencil) {
            throw new Error('Dependencies not provided!');
        }
        console.log('writing...');
    }
    public draw() {
        if (!this.notebook || !this.pencil || !this.eraser) {
            throw new Error('Dependencies not provided!');
        }
        console.log('drawing...');
    }
}
*/