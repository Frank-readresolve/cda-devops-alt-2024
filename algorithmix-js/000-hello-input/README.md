# 000-hw-input
"hw" stands for "Hello world!" :). Example exercise 2.

## Specifications and constraints
Write a program that outputs the sentence `Hello World! Your name is ` concatenated with the single input of the program which is intended to be the username.

> [!NOTE]
> Remember that in our context "program's first argument" refers to the third "Node's command-line argument" (we do always ignore the first two), and that we do not manage the case where it is not present (undefined.)

## Examples

### Example #0
- Command: `node run` (no "first argument")
- Output: `undefined`

### Example #1
- Command: `node run Frank`
- Output: `Hello World! Your name is Frank`

### Example #2
- Command: `node run "Frank MARSHALL"`
- Output: `Hello World! Your name is Frank MARSHALL`