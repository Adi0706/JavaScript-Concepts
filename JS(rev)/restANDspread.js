const sum = (function(){
    //REST OPERATOR - WE CAN ADD N NUMBER OF ARGUMENTS ACCORDING TO OUR NEED , WE DONT NEED TO DECLARE AN ARRAY AGAIN AND AGAIN FOR TI 
    return function sum(...args){
        return args.reduce((a,b)=>a+b,0) ;
    };
})() ; 

//SPREAD OPERATOR
const arr1 = ['jan','feb'] ; 
let arr2;
(function(){
    arr2= [...arr1] ;//this will copy all the contents of arr1 to arr2 
    arr1[0] = 'potato'
}) () ; 

console.log(arr2) ; 

// basically " ..." can help us in selecting all the elements in the array