##  generate-ssh-key

First, we need to generate an SSH key.

```bash
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
$ # Creates a new ssh key, using the provided email as a label
```

When it prompts you to enter a file, just leave it blank and hit enter to accept the default.

```bash
$ Enter a file in which to save the key: # Press Enter
```

When it prompts you to enter a passphrase, just leave it blank also, then confirm.

```bash
$ Enter passphrase (empty for no passphrase): # Press Enter
$ Enter same passphrase again: # Press Enter
```
