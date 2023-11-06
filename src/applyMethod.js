function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  greet("Alice"); // Output: Hello, Alice
  
  const person = {
    name: "Bob"
  };
  
  greet.apply(person, ["Bob"]); // Output: Hello, Bob
  