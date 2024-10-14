const args = process.argv.slice(2); // Ignore node and run.js
// args[0]... args[n]
let output = "Hello World! Your name is ";

// Write program here
output += args[0];

console.log(output);
