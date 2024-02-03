const person = [
    {name : 'nge' ,gender : null},
    {name : 'lwin', gender : 'Male'},
    {name : 'hmue', gender : 'Female'},
    {name : 'thet', gender : 'Female'}
]

const modi_person = person.map(
    
    (person) => {
        
        if(person.gender) {
           if(person.gender === 'Female') {
            person.gender = 'F'
            return person;
           } else if(person.gender === 'Male') {
            person.gender = 'M'
            return person;
           }
          
        }else {
            person.gender = 'Unkonwn'
        }
            return person;
                    
    }
)

console.log(modi_person)