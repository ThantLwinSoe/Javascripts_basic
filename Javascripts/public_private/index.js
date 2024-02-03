class person {
    #id = 1
    name = 'thant'

    sayHello() {
        console.log(`Hello ${this.name}`)
    }

    getId() {
        let num = this.#id;
        return num;
    }
}

var per = new person

console.log(per.getId())
console.log(per.sayHello())
