##  Add ssh key to github

Now that we have an SSH Key on our computer we need to tell Github about it.

First let's copy our SSH key into our clipboard.

```bash
$ pbcopy < ~/.ssh/id_rsa.pub
# Copies the contents of the id_rsa.pub file to your clipboard
```

Note: The `pbcopy` command *may* not work for the Windows users.

