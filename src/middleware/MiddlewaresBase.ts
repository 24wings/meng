import express = require("express");
import bodyParser = require("body-parser");



class MiddlewaresBase {

    static get configuration() {
        var app = express();
        //  app.use(bodyParser.json());
        //  app.use(MethodOverride.configuration());
        app.use('*', (req, res) => {
            res.json({ issuccess: true });
        });

        return app;
    }
}
Object.seal(MiddlewaresBase);
export = MiddlewaresBase;