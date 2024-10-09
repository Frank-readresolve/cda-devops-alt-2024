# Algorithmix-JS
The goal of these exercises is to learn how to read and write a simple program, how to translate requirements expressed in a natural language into a small computer program, then to learn or strenghten the basics of JavaScript which is the implementation language.

## Prerequisites
- [Node JS](https://nodejs.org/en/download/package-manager/current), a JavaScript execution environment
- Basic usage of a [command-line interface](https://en.wikipedia.org/wiki/Command-line_interface) (CLI)
- A deep desire to [solve problems](https://en.wikipedia.org/wiki/Problem_solving) and become a developer!

## How is it organised? General considerations
Each folder contains the "Specifications and constraints" for a single exercise written in a `README.md` file; most of the time some input/output examples are also given.

Read carefully the specifications and constraints, you must obey to them :P! **Make sure you have understood each intruction and the problem** described before trying to solve it. Do not interpret! Ask your colleagues first then trainer if needed to clear up ambiguities or misunderstandings.

> [!IMPORTANT]
> Unless otherwise stated, JavaScript built-in functions ar not allowed! In other words, build-in functions are listed in the `README.md` when they are allowed.

## How-to?
A simple "hello world"-like example is provided in the first `000-hw` folder. We'll figure it out together.

Each time you start a new exercise, create the folder with the same name in your repository then add a `run.js` file into the new folder. Copy-paste the code from the exercise's folder to your local `run.js` file.

> [!IMPORTANT]
> Unless otherwise stated, there must be a single `console.log` in each `run.js` file.

> [!NOTE]
> If required, you can change the initialization of the `output` variable which is by default set to `null`.

Scripts have to be executed thanks to Node JS (from repository folder):
```
node algorithmix-js/<EXERCISE_FOLDER_NAME>/run <ARGS>
```
or from algorithmix-js folder:
```
node <EXERCISE_FOLDER_NAME>/run <ARGS>
```
or from exercise folder:
```
node run <ARGS>
```

## Exercise categories

### Big bang
The specifications and constraints are present in the exercise's folder, and a `run.js` file containing a skeleton to start with. The skeleton may look like here after:
```js
 // argv: Node's arguments
 // inputs: our program inputs, we ignore the first two
const inputs = process.argv.slice(2);
let output = null;

// Implementation of the solution here

console.log(output);
```

### Fill in the blanks
Specifications and constraints are present in the exercise's folder as usual, but with an incomplete solution in the provided `run.js`. The provided script may contain additional instructions, usually in the form of comments; you must follow these instructions as those expressed in the related `README.md`.

### Where's Wally? ("Où est Charlie" in french/France)
"Wally" is a bug. This category provides a "complete" solution but the solution is buggy. So your job in this case is to fix the bug.