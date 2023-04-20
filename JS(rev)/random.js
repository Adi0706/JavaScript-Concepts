var randomnumber = Math.floor(Math.random()*20) ; 


function randono( ) {
    return Math.floor(Math.random() *10);
}

//parseInt function-Takes a string and gives an Integer

function convertToInteger(str){
    return parseInt(str)
}
convertToInteger("56") ; 

//use of terary operator
function checkEqual(a,b) {
    return a === b ? true : false ; 
}
checkEqual(1,2) ; 