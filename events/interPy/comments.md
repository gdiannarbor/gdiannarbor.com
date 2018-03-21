# Comments

As you start writing more complicated scripts, it becomes more and more difficult to understand what a particular script is supposed to do when you come back to it after a period of time.

To avoid this, leave yourself *helpful* comments.

Comments start with pound (`#`) sign. I generally leave myself a comment at the top of each script, just giving a high-level overview of what's happening. Comments are automatically ignored by the Python interpreter.

```python
# this prints Hello, World

phrase = "Hello, World"
print phrase
```

If you have a lot to say you can write comments that span multiple lines like so:

```python
""" This is my first script.
It prints the phrase "Hello, world."
The comments are longer than the script """

phrase = "Hello, world."
print phrase
```

If you establish good habits for writing comments, you will save yourself much pain later when trying to understand something cryptic that you wrote before. It's also really, really helpful for those reading your code. 
