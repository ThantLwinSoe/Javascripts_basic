class Car{
    wheels = 4
    color = 'red'
    dirve() {
        console.log('The car is driving')
    }

    getWheels() {
        console.log(`${this.wheels} Wheels`)
    }

    getColor() {
        console.log(`The car color is ${this.color}`)
    }
}

const car = new Car
car.getColor()
car.getWheels()