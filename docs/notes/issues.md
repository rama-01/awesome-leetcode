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

### 2.