function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    throw new Error('Arguments cannot be null or undefined'); // Throw an error for null/undefined
  }
  return a + b; // Perform addition
}

// Test cases
console.log(foo(5, 10));   // Output: 15

try {
  console.log(foo(null, 5)); // Throws Error
} catch (error) {
  console.error(error); // Handle the error
}

try {
  console.log(foo(10, undefined)); // Throws Error
} catch (error) {
  console.error(error);
}
