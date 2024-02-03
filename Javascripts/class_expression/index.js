const Car = class{
    color = 'red';
    wheels = 4;

    drive() {
        console.log(`This car have ${this.color}`);
    }
}

var car = new Car();
car.drive();