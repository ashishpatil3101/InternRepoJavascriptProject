
//reduce method
//call the callback function for every element in array and return single value as result
//if we dont initilize the value of accumulator ,it will be equal to first element and
// callback function starts excuting from 2nd element and one less iteration will be there

const arr = [100, 200, -100, 300,100];

//que = >calculate sum of all the elements from above array


const sum = arr.reduce( ( accumulator, curElement )=>{
                
      return accumulator + curElement;
      
},0)

console.log( `sum is : ${sum} `)