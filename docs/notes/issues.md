### 1. git无法连接远程仓库

```
ssh: connect to host github.com port 22: Connection timed out
fatal: Could not read from remote repository
```

##### 解决方法

[github docs](https://docs.github.com/en/authentication/troubleshooting-ssh/using-ssh-over-the-https-port)

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

To set this in your SSH configuration file, edit the file at ~/.ssh/config, and add this section:(其中config是文件名，无后缀名)

```shell
Host github.com
    Hostname ssh.github.com
    Port 443
    User git
```

### 2.树结构的遍历
[csdn](https://blog.csdn.net/My_Jobs/article/details/43451187)

### 3. 回溯法的基本模板
```py
res = []
path = []

def backtrack(未探索区域, res, path):
    if path 满足条件:
        res.add(path) # 深度拷贝
        # return  # 如果不用继续搜索需要 return
    for 选择 in 未探索区域当前可能的选择:
        if 当前选择符合要求:
            path.add(当前选择)
            backtrack(新的未探索区域, res, path)
            path.pop()
```
