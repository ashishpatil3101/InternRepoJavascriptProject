//filter method 
//returns new array based on some criteria or we can return every element
//takes callback function ( element, indx , array)

const arr = [2,3,4,5,6,7,8];

const evenElementArray = arr.filter( ( element )=> {

    return element % 2 == 0;
})

console.log( evenElementArray );