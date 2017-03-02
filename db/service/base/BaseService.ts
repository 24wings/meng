import * as mongoose from 'mongoose';

/**
 * 
 * 读操作的接口
 * @interface Read
 * @template T 
 */
interface Read<T> {
    // retrieve: (callback: (error: any, result: any) => void) => void;
    // findById: (id: string, callback: (error: any, result: T) => void) => void;
}

interface Write<T> {
    // create: (item: T, callback: (error: any, result: any) => void) => void;
    // update: (_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) => void;
    // delete: (_id: string, callback: (error: any, result: any) => void) => void;

}


/**
 * 
 * 
 * @export
 * @class BaseService
 * @implements {Read<T>}
 * @implements {Write<T>}
 * @template T 
 */
export class BaseService<T extends mongoose.Document> implements Read<T>, Write<T>{
    protected _model: mongoose.Model<mongoose.Document>;

    retrive() {
        return this._model.find().exec();
    }

    constructor(model: mongoose.Model<mongoose.Document>) {
        this._model = model;
    }
}