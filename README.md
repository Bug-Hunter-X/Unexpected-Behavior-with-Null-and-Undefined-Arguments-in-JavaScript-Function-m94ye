# JavaScript Bug: Unexpected Null/Undefined Handling

This repository demonstrates a common error in JavaScript function handling of null or undefined arguments.  The `foo` function unexpectedly returns 0 when either `a` or `b` is null, rather than throwing an error or providing more informative feedback. This could lead to difficult-to-debug issues in larger applications.

## Bug Description
The `foo` function is designed to add two numbers. However, it silently returns 0 if either of the inputs is null or undefined. A more robust solution would throw an error or handle these cases explicitly for better error handling and maintainability.

## How to Reproduce
1. Clone the repository.
2. Run `bug.js` using a JavaScript runtime (Node.js, browser console, etc.).
3. Observe the unexpected output when null or undefined is passed as an argument.

## Solution
The `bugSolution.js` file contains a corrected version of the function, which throws an error if null or undefined is provided.  A more nuanced approach might be to provide a default value.