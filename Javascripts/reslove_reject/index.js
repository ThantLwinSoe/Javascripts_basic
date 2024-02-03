function addInfinity() {
    let temp = 1;
    for(let i = 1; i < 1000000000 ; i++) {
        temp = temp * i; 
    }

    return temp;
}

/* This use catch method after then

function addInfinityLoader(){
    return new Promise( (reslove) => reslove( addInfinity()));
}

addInfinityLoader().then( (result) => console.log(result)).catch(() => console.log('Error'))

*/

/* This use reject parameter of Promise
*/

function addInfinityLoader() {
    return new Promise( (reslover, reject) => {
        
        let result = addInfinity();
        if(result) {
            reslover(result);
        }else{
            reject();
        }
        

    })
}


console.log('Some process');


// addInfinityLoader().then((result) => console.log(result));

addInfinityLoader().then(result => console.log(result)) 

console.log('Some process');


