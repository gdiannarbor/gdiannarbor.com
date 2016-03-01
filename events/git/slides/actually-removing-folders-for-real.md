##  Actually removing folders, for real

So you may get the impression that the terminal can be a little finicky about the commands you give it. And you'd be right.

<br>

<p class="fragment" data-fragment-index="1">We need to tell the terminal to remove `.git` and all of its contents, including subfolders. So this will do the trick (I swear).</p>

```bash
$ rm -rf .git
```
<!-- .element: class="fragment" data-fragment-index="1" -->

<p class="fragment" data-fragment-index="2">The `-r` flag tells the computer to *recursively* remove all the files and subfolders in `.git` before deleting the folder itself.</p>


<br>

<p class="fragment" data-fragment-index="3">The '-f' (shortened to `-rf`) flag tells the computer to *forcibly* do whatever command it's attached to. That means it'll skip any warnings and assume you know what you're doing (tread carefully).</p>