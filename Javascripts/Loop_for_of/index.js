const person = [ 11 , 22 , 33 , 44, 'tls']

function getValues() {
    let array = []
    for(p of person){
        array.push(p)
    }
    return array
}

console.log(getValues())