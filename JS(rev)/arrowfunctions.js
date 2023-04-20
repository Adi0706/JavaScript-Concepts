var magic = function(){
    return new Date() ; 
};

// OR 
var magic = () => {
    return new Date() ; 
}
//OR
const magic = () => new Date() ; 
//or

//arrow functions with parameter 

// var myconcat = (arr1,arr2) => {
//      return arr1.concat(arr2);
// } ; 


 //OR

 const myconcat = (arr1,arr2) => arr1.concat(arr2) ;
//HIGH ORDER ARROW FUNCTIONS

const realnumberarray = [4,-3.6,5] ; 
const squarelist = (arr) => { 
    const squaredIntegers = arr.filter(num =>Number.isInteger(num) && num > 0) ; //if theres only one parameter in the function then we dont have to use paranthesis

    return squaredIntegers ; 
} ;

const squaredIntegers = squarelist(realnumberarray) ; 
//default parameters

const increment  = (function(){
    return function increment (number,value = 1) {
        return number + value ; 
    };
}) () ; 
 console.log(increment(5,2)) ; 
 console.log(increment(5)) ; 


