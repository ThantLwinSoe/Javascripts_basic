const person = [
    {name : 'tls' , age : 27},
    {name : 'hmue' , age : 20},
    {name : 'thet', age : 21},
    {}
]

const result = person.map(
    (person) => {
        switch(person.name) {
            case 'tls':
                person.name = 'thant lwin soe';
                break;
            case 'hmue':
                person.name = 'thet hmue nge'
                break;
            case 'thet': 
                person.name = 'thet hsu naing'
                break;
            default:
                person.name = 'Unknown Person'
                person.age = 21
        }
       return person;     
    }
   
)

console.log(result)

