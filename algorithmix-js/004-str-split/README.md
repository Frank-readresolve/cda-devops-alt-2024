# 004-str-split

## Specifications and constraints
Write a program that divides a string using a delimiter, the result is an array of string(s) where each string is one part/division of the original input string.

## Examples

### Example #1
- Command: `node run "" ,`
- Output: `['']`

### Example #2
- Command: `node run "," ,`
- Output: `['', '']`

### Example #3
- Command: `node run "abc" ,`
- Output: `['abc']`

### Example #4
- Command: `node run "abc,def" ,`
- Output: `['abc', 'def']`

### Example #5
- Command: `node run "abc,,def" ,`
- Output: `['abc', '', 'def']`