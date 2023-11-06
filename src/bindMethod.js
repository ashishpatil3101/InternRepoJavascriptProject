function sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
  
  const person = {
    name: "John"
  };
  
  const sayHelloJohn = sayHello.bind(person);
  
  sayHelloJohn(); // Output: Hello, John!
  