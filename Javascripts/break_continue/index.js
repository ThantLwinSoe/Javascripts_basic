const number = [ 11 ,22 , -1, 55]

for(let i = 0 ; i < number.length ; i ++){

    if(number[i] < 0) {continue}

    console.log(number[i])

}

for(let i = 0; i < number.length ; i ++) {
    if(number[i] < 0) break
    console.log(number[i])
}