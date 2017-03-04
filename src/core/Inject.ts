

export function Inject(...dependencies) {
    return function (constructor) {
        /**
         * 将依赖注入的列表放入,依赖仓库
         */
        InjectFactory.dependenciesMap[constructor.name] = dependencies;
        return constructor;
    };
}

export class InjectFactory {
    static dependenciesMap = {

    };
    static resolve(constructor) {
        console.log('依赖的名字', constructor.name);
        var dependencies = InjectFactory.dependenciesMap[constructor.name];
        console.log(dependencies);
        /**
         * 根据依赖列表自动注入依赖
         */
        dependencies = dependencies.map(function (dependency) {
            return new dependency();
        });
        console.log('为了实例化' + constructor.name, '其依赖注入列表', dependencies);
        // 如果可以使用ES6的语法，下面的代码可以合并为一行：
        return new constructor(...dependencies);
    }
}

