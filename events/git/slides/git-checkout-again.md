#### `[new-ish command]`
##  git checkout (again)

We've already seen `git checkout` used to revisit old commits. You can also use this command to undo unwanted changes to a file or collection of files. You may have noticed that git actually tells you this when you check your status.

![](images/gitcheckout.png)

`git checkout -- helloWorld.js` would set the file back to the way it is in the repo's most current snapshot.