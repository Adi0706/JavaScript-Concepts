//while loops
var myArray = [] ;
var i = 0 
while(i<5){
myArray.push(i);
i++ ; 
}
//for loop

var ouArray = [] ;

for(var i = 0;i<5;i++)
{
    ouArray.push(i) ; 
}

var newArray = [1,2,3,4,5,6] ;
var sum = 0 ;
for(var i =0 ; i<newArray.length;i++)
{
   sum = sum+newArray[i] ;
}
//nesting for loops

function multiplyAll(arr)
{
    var product = 1 ;
    for(var i = 0 ; i<arr.length;i++)
    {
        for(var j = 0 ; j<arr[i].length;j++){
            product = product * arr[i][j]
        }
        return product

    } 
}

var product = multiplyAll([[1,2],[2,2]]) ; 

console.log(product) ; 
