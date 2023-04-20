//STAND IN LINE
//in this we have used JSON.stringyfy-> whcih conversts arrays to strings
function nextInLine(arr,item)
{
    arr.push(item) ; 
    return arr.shift(); 
}
var testArr = [1,2,3,4,5] ; 

console.log("Before :" + JSON.stringify(testArr)) ; 
console.log(nextInLine(testArr,6)) ; 
console.log("After" + JSON.stringify(testArr)) ; 