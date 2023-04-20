var human = {
    "name" : "camper" , 
    "race" : "asian" , 
} ; 

var shirtname = human.name ; 
var racist = human.race ; 

//adding new properties to objects

 human["bark"] = "wooo"

//deleting property from the object 
delete human.race ; 
//multi array object
var myPlants = [{
    type:"flowers",
    list : [
        "rose",
        "tulip",
        "dandelion"
    ]
},
{
    type:"trees",
    list: ["fir",
"pine","banyan"]
}
];

var result = myPlants[1].list[2] ; 
 