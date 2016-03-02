##  Seeing the unseen

So let's try this
```bash
$ ls -al #shows all folders and files, even hidden ones
```
Aha! There it is. <!-- .element: class="fragment" data-fragment-index="1" -->

Now let's tell our computer to remove that whole directory. <!-- .element: class="fragment" data-fragment-index="2" -->

```bash
$ rm .git #removes .git and all its contents
```
<!-- .element: class="fragment" data-fragment-index="2" -->

<img src="images/redpandajumpfail.gif" width="200" class="fragment" data-fragment-index="3" />

d'oh!  That didn't work either. You probably got an error message similar to this. <!-- .element: class="fragment" data-fragment-index="3" -->
```bash
rm: .git: is a directory
```
<!-- .element: class="fragment" data-fragment-index="3" -->
