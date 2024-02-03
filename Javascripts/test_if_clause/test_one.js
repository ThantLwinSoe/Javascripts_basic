const numbers = [11,22,33,44]

numbers.map( (num) => {
    if(num % 2 === 0) {
        console.log('Even')
    } else {
        console.log('Odd')
    }
})