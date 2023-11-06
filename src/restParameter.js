function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  console.log(sum(10, 20, 30)); // Output: 60
  