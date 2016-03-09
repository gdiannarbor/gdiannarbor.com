##  using git revert

Now we'll use `git revert` to get rid of this commit.

```bash
$ git log
```
![](images/gitrevert.png)

Since we're just reverting the most recent commit we can just use this command.

```bash
$ git revert HEAD
```
