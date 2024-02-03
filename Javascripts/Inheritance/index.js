class Animal{

    sleep() {
        console.log('Sleeping!!!')
    }

    feed() {
        console.log('Feeding')
    }
}

class dog extends Animal{
    bite() {
        console.log('Dog going to bite!!!')
    }
}

var d = new dog
d.bite()
d.feed()