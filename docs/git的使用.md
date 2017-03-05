参考文档 [git](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
安装完了git 一般要配置git的全局变量,即辨认使用git提交代码的身份


```git
git config  --global  user.name 24wings
git config --global user.email  2121718893@qq.com
```


* 查看远程的源
* 添加远程仓库源

```git
git remote -v


// git remote add <shortname> <url>: 
git remote add pb https://github.com/paulboone/ticgit
```