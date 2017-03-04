
import { Inject, injector } from './inject';
import { Notebook, Pencil, Eraser } from './demo';
@Inject(Pencil, Eraser, Notebook)
class Student {
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
var student = injector.resolve(Student);
console.log(student instanceof Student); // true
student.notebook.printName(); // this is a notebook
student.pencil.printName(); // this is a pencil
student.eraser.printName(); // this is an eraser
student.draw(); // drawing
student.write(); // writing 