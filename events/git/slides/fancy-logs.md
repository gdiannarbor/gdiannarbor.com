##  Fancy logs

`git log` comes with a whole bunch of options to configure how the log information is displayed

Try this:

```bash
$ git log --pretty=oneline
```

Or these:
```bash
$ git log --pretty=oneline --max-count=2
$ git log --pretty=oneline --since='5 minutes ago'
$ git log --pretty=oneline --until='5 minutes ago'
$ git log --pretty=oneline --author=<your name>
$ git log --pretty=oneline --all
```
