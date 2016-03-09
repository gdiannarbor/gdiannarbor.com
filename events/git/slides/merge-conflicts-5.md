##  merge conflicts

The two chunks of code between the `<<<<<` and `>>>>>>` is the conflicting code. We have to fix it and then add, and recommit it.

Since we want to keep both changes in the previous case, we should change the file to something like this, getting rid of the conflict brackets and making sure the rest of the content is there.


```bash
This is my change

This is your change
```