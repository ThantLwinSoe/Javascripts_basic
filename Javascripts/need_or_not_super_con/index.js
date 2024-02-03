class Animals {

    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running`);
    }
}

class Cat extends Animals{

    constructor(name , color){
        super(name)
        this.color = color;
    }

    meow() {
        console.log(`${this.name} with ${this.color}`);
    }
}

var cat = new Cat("mi", "yellow")
cat.meow()