##  git reset hard

If you REALLY want to get rid of the staged changes. You can add the

`--hard` flag to the `git reset` command. This will unstage and overwrite the files.

<br>

Change the file again and stage it. Then use `git reset --hard` to completely discard the changes.

```bash
$ git status
$ git reset --hard
```

NOTICE: This *does* discard all the changes in your working directory. As before, make sure you're sure you know what you're doing when you use this command.