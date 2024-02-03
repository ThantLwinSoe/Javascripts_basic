function add_thousnad() {
    let result = 0;
    for(let i = 0; i< 10000 ; i ++) {
         result ++;
    }
    return result;
}

function add_thousnad_later() {
    return  new Promise( done => {done(add_thousnad())})
}

console.log('some process')
add_thousnad_later().then( result => console.log(result))
console.log('some process')