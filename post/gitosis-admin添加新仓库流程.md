gitosis-admin添加新仓库流程

# gitosis-admin添加新仓库流程

1. mkdir /home/git/repositories/new_repo.git  //仓库名必须以.git结尾
2. cd new_repo.git  && git init --bare  && cd ..
3. sudo chown git:git /home/git/repositories
4. git clone git@hostname:用户名/gitosis-admin.git
5. cd gitosis-admin/
6. 修改gitosis.conf
```
[gitosis]

[group gitosis-admin]
writable = gitosis-admin
members = a@server1

[group developers]
writable = helloworld
members = a@server1 b@server2

[group test] 
readonly = helloworld
members = c@server3
```
这个配置文件表达了如下含义：gitosis-admin组成员有a，该组对gitosis-admin仓库有读写权限； developers组有a，b两个成员，该组对helloworld仓库有读写权限； test组有c一个成员，对helloworld仓库有只读权限。 当然目前这些配置文件的修改只是在你的本地，你必须推送到gitserver上才能真正生效。 加入新文件、提交并push到git服务器：
```
git add .
git commit -am "add helloworld project and users"
git remote add origin ssh://git@hostname/helloworld.git
git push origin master
```

https://zhuanlan.zhihu.com/p/37043347
