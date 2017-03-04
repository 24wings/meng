import { Notebook, Pencil, Eraser } from './demo';
var dependenciesMap = {

};
export var injector = {
    resolve: function (constructor) {
        console.log(constructor.name)

        var dependencies = dependenciesMap[constructor.name];
        console.log(dependencies);
        dependencies = dependencies.map(function (dependency) {
            return new dependency();
        });
        // 如果可以使用ES6的语法，下面的代码可以合并为一行：
        return new constructor(...dependencies);
    }
};
export function Inject(...dependencies) {
    return function (constructor) {
        dependenciesMap[constructor.name] = dependencies;
        return constructor;
    };
}