function makeclass()
{
    class vegetable {
        constructor(name)
        {
            this.name= name ;
        }
    }
    return vegetable ;
}
const vegetable = makeclass() ;
const carrot = new vegetable('carrot') ; 

class Book {
    constructor(author) {
        this.author = author ;
    }
}

get writer() {
    return this._author;
}

set writer(updatedAuthor) {
    this._author  = updatedAuthor;
}

function makeclass() {
    return Thermostat ; 
}


