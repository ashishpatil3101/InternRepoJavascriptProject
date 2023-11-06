//array
//returns new array 
//will call callback function for every element in array

const names = [ "vaibhav" , "sunil", "digu", "rohit"];

const newArray = names.map( ( value ) =>{

    return {name: value}
});


console.log(newArray);