##  Add ssh key to agent

Now we need to make sure our computer knows about the key we just made.

```bash
$ eval "$(ssh-agent -s)"
$ # Agent pid 59566
$ ssh-add ~/.ssh/id_rsa
```