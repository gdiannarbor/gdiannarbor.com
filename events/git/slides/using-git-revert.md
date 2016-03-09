##  using git revert


Back in our git-cmd-demos folder!
```bash
$ cd ~/gdi-git/git-cmd-demos
```

Let's change, save, add, and commit our `beatles.js` file. Right now it's empty.

<p class="terminal"><code>beatles.js</code></p>

```javascript
//We won't keep this
console.log("Hey Jude");
```
Add and commit the change.

```bash
$ git add beatles.js
$ git commit -m "don't make it bad"
```