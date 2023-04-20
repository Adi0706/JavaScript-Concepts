const MATH_CONSTANTS = {
    PI : 3.14 
} ; 
Object.freeze(MATH_CONSTANTS) ; // if you dont wan any object to change use object . freeze("obj")
try { 
    MATH_CONSTANTS.PI = 99 ;
} catch(ex) { 
    console.log(ex) ; 
}

return MATH_CONSTANTS.PI ; 


const PI  = freezeObj() ; 

console.log(PI) ; 