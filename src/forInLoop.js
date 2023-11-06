const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "johndoe@example.com"
  };
  
  for (const key in person) {
   
      console.log(`${key}: ${person[key]}`);
    
  }
  