const person = [
    {name : 'tls', age : 21 , department : ['IT',"Electronics"]},
    {name : 'hmue', age : 18 , department : ['Nurse','Photograph' , 'Video Editor']},
    {name : 'lwin' , age : 19, department : ['Doctor', 'Sales']}
]


function personByFilter(people , targetDepartment) {
    const filterPeople = people.filter( p => p.department.includes(targetDepartment))
    return filterPeople
}

// console.log(personByFilter(person, 'IT'))

function personOver18(person) {
    const result = person.filter( p => p.age > 18 )
    return result;
}

console.log(personOver18(person))