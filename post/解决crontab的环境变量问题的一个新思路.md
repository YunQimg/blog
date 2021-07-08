# 解决crontab的环境变量问题的一个新思路

最近遇到了crontab执行定时任务失败的问题, 原因是crontab 环境变量与bash中不同.

尝试搜索了解决办法, 但又出现了新的问题, 比如import失败等.

后来又想到了一个新办法, 即利用ssh远程执行命令的功能, 执行本机程序.

下面是操作步骤:

1. 生成一对密钥, 公钥添加到本机的 `~/.ssh/authorized_keys`中, 并在`~/.ssh/config` 配置文件中添加私钥路径

```
Host 127
User root
Hostname 127.0.0.1
IdentityFile /path/to/your/privete.key
PubkeyAuthentication yes
```

2. 在 `/etc/crontab` 中添加ssh命令, 如下:

```
ssh 127 "/path/to/your/script.sh"
```

用这种方式, 可以避免crontab缺失的环境变量问题, 且无需在脚本中提前配置程序所需的环境变量.