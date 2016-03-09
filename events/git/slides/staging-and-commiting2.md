##  staging and commiting

The changes in `blinky.js` and `inky.js` are related to each other, but the changes in `pinky.js` are not related to the others.

You could do the following (don't type these commands):
```bash
$ git add blinky.js
$ git add inky.js
$ git commit -m "changes for blinky and inky"

$ git add pinky.js
$ git commit -m "unrelated change to pinky.js"
```
Now you have 2 tidy commits that are all grouped together logically rather than in one lump. By separating staging and commiting, you have greater control over what goes into each commit.