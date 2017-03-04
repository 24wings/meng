import { inject, injectable } from "inversify";
var TYPES = {

};
interface NotebookInterface {
    printName(): void;
}
interface PencilInterface {
    printName(): void;
}
interface EraserInterface {
    printName(): void;
}
interface StudentInterface {
    notebook: NotebookInterface;
    pencil: PencilInterface;
    eraser: EraserInterface;
    write(): void;
    draw(): void;
}
class Notebook implements NotebookInterface {
    public printName() {
        console.log('this is a notebook');
    }
}
class Pencil implements PencilInterface {
    public printName() {
        console.log('this is a pencil');
    }
}
class Eraser implements EraserInterface {
    public printName() {
        console.log('this is an eraser');
    }
}

class Student implements StudentInterface {
    notebook: NotebookInterface;
    pencil: PencilInterface;
    eraser: EraserInterface;
    constructor(notebook: NotebookInterface, pencil: PencilInterface, eraser: EraserInterface) {
        this.notebook = notebook;
        this.pencil = pencil;
        this.eraser = eraser;
    }
    write() {
        console.log('writing...');
    }
    draw() {
        console.log('drawing...');
    }
}



