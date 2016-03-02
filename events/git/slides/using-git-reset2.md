##  using git reset

Now let's reset that file and re-check our status.

```bash
$ git reset HEAD beatles.js
```
![](images/gitreset3.png)

NOTICE! This doesn't destroy the changes. It simply removes the file from the staging area. From here you can use `git checkout` to remove the changes entirely or continue working before re-staging. Unless...