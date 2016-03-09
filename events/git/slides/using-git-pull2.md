##  using git pull

Now there is a file on our remote repo that we don't have locally. Let's make a new change and try to push it.

```bash
$ touch failboat.js
$ git add failboat.js
$ git commit -m "this won't work"
$ git push origin master
```