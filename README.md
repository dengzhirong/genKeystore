## 批量生成keystore签名脚本工具

### 一. 环境配置

1) 请先安装node.js软件。https://nodejs.org/en/。


2）将 keytool 添加到环境变量。
2.1） windows系统:
    -> 可参考 http://www.runoob.com/java/java-environment-setup.html。
    -> keytool.exe用于生成key，一般位于C:\Program Files\Java\jre1.8.0_25\bin目录下（jre的安装目录），把这两个的路径添加到环境变量path后，就完成了签名工具的配置。

2.2）mac系统：
    ->可参考https://my.oschina.net/u/244918/blog/625545。

### 二. 脚本运行
先到key.js文件夹，配置keystore文件的相关参数。然后运行脚本：

```
node index
```
