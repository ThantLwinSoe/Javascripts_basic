class Animals {
    constructor(name){
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running!!!`)
    }
}

class Dog extends Animals {
    bark(){
        console.log(`${this.name} :: WOOOOO`)
    }
}

var dog = new Dog('Alex')
dog.bark()