import Mongoose = require("mongoose");
export class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;

    constructor() {
        DataAccess.connect();
    }

    static connect(): Mongoose.Connection {
        if (this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Conectado ao mongodb.");
        });

        this.mongooseInstance = Mongoose.connect("mongodb://120.77.169.182/test");
        return this.mongooseInstance;
    }

}

DataAccess.connect();