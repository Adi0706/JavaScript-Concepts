//old way of accessing the objects 

var something = {x:3.6,y:7.4,z:6.54} ; 

var x = something.x;
var y = something.y;
var z = something.z ; 

//NEW WAY OF ACCESSING THE OBJECT IS 

const { x :a,y:b,z:c} = something ; 

//EXAMPLE 

const AVG_TEMPERATURE = {
    today : 77.5 , 
    tomorrow : 79
};

function getTempofTmrw(avgTemperatures) {

    const {tomorrow:tempofTomorrow}  = avgTemperatures ;

    return tempofTomorrow ; 
}

// console .log(getTempofTmrw(AVG_TEMPERATURE)) ; 

// destructuring using nested objects

 const LOCAL_FORECAST  = { 
    today: {max:72,min:75} ,
    tomorrow : {max:90,min:70}
 };

 function getMaxofTmrw (forecast){
    const {tomorrow: {max:maxoftomorrow}} = forecast ;
    return maxoftomorrow ; 
 }

//  console.log(getMaxofTmrw(LOCAL_FORECAST)) ; 

//DESTRUCTURING USING ARRAY 
const [z,x, ,y]  = [1,2,3,4,5,6] ; //z and x will store the 1st and 2nd element of the array 
// console.log(z,x,y);


let m = 8 
let  n = 6 ;
(()=>{
    [a,b] = [b,a] ;

}) () ; 

