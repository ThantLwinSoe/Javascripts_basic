const person = [
    { name : 'tls', age : 23},
    { name : 'hmue' , age : 24},
    { name : 'thet' , age : 36}
]

const array = person.map( (p) => p.name).filter( a =>  a === 'tls')

console.log(array)

console.log(person)