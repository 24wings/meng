express 居然可以这样用...
```nodejs
app.use(app2);
```

猜想,每个Controller都是一个app
自动use自己的每一个属性


更新修改的意见,
* 所有restful 全部用继承基础类加上实现接口来完成
* 所有的路由抛弃 这种扫描流属性方法来完成,改由, switchAction 和doAction 来完成,  因为这样可以指定static 方法或工具方法,并且可以任意浏览数据库的操作,但是最好指定枚举类之类的技术,可以实现智能语法提示,实在不行,就用switchAction 但是 不走switchAction 

**  前后台框架与组件统一的问题


[express 的body size 错误解决方式](https://github.com/expressjs/body-parser)