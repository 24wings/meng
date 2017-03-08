import mongoose = require('mongoose');
import express = require('express');
/**
 * 根据数据库表自动生成Restful路由
 * @param restfulOption Schma参数和路由参数,
 */
export function Restful(restfulOption?: RestfulOptions) {
    return (target) => {
        Reflect.defineMetadata('RestfulOptions', restfulOption, target)
        var model = mongoose.model(restfulOption.schemaName, new mongoose.Schema(restfulOption.schema));
        RestfulFactory.registerModel(target, model);

    }
}


/**
 * Restful 选项,
 * 
 */
export interface RestfulOptions {
    url: string;
    schemaName: string;
    schema: mongoose.SchemaDefinition;
    schemaOption?: mongoose.SchemaOptions;
}

export class MongoField {
    type: new () => String
}

var field: MongoField = {
    type: String
};

export class RestfulFactory {
    private static _models = new Map();
    static registerModel(target, model) {
        RestfulFactory._models.set(target, model);
    }
    static allSchemaTarget() {
        return RestfulFactory._models;
    }
    static getModel(target) {
        return RestfulFactory._models.get(target);
    }

}
export class RestfulApi {
    static get(model: mongoose.Model<any>) {
        return async (req: express.Request, res: express.Response) => {
            var data = await model.find(req.query).exec();
            res.json({
                issuccess: true,
                data: data
            })
        }
    }
    static post(model: mongoose.Model<any>) {
        return async (req: express.Request, res: express.Response) => {
            /**
             * 根据schma,或者传入的实体类来进行body检查
             */
            console.log(req.body);
            new model(req.body).save((err, doc) => {
                if (err) {
                    res.json({
                        issucess: false,
                        errorMsg: err
                    })
                } else {
                    res.json({
                        issuccess: true,
                        data: doc
                    });
                }
            });

        }
    }
    static delete(model: mongoose.Model<any>) {
        return async (req: express.Request, res: express.Response) => {
            /**
             * 不能默认删除所有,
             * 
             */
            if (req.query) {
                var result = await model.find(req.query).remove().exec();
                res.json({
                    issuccess: true,
                    data: result
                });

            } else {
                res.json({
                    issuccess: false,
                    errorMsg: '消息未找到'
                })
            }
        }
    }
    static put(model: mongoose.Model<any>) {
        return async (req: express.Request, res: express.Response) => {
            /**
             * 检查数据是否与表单数据合法
             * 
             */
            if (req.body._id) {
                model.update({ _id: req.body._id }, req.body).exec((err, result) => {
                    res.json({
                        issuccess: !err,
                        data: err ? err : result
                    });
                });

            }
            else {
                res.json({
                    issuccess: false,
                    data: '参数不合法'
                });
            }
        }
    }

    static options(schemaDefinition: mongoose.SchemaDefinition) {
        return async (req: express.Request, res: express.Response) => {
            console.log(schemaDefinition);
            var json = RestfulApi.parserSchemaToJson(schemaDefinition);
            res.json({
                issuceess: true,
                data: json
            });
        }
    }

    /**
     * 检查 update,put 的body参数
     */
    static checkQuery() {

    }
    /**
     * 解析schema成为 JSON数据
     */
    static parserSchemaToJson(schemaDefinition: mongoose.SchemaDefinition) {
        var fields = Object.keys(schemaDefinition);
        schemaDefinition
        var obj = {};
        fields.forEach(field => {
            var type: mongoose.SchemaTypeOpts<any> = schemaDefinition[field];
            if (Array.isArray(type.type)) {
                type.type[0].type = RestfulApi.parseType(type[0]);

            } else {
                type.type = RestfulApi.parseType(type.type);
            }
            obj[field] = type;

        });

        return obj;
    }


    static parseType(type: any) {

        if (type == String) {
            return "String";

        } else if (type == Date) {
            return "Date";

        } else {
            return "unkown";
        }
    }
}