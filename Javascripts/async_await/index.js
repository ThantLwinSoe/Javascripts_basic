function multi_Infinity() {
    let result = 1;
    for(let i = 1; i < 1000000000 ; i++) {
        result = result * i;
    }
    return result;
}

async function multiInfinity_async_await(){
    let result = await multi_Infinity();

    return result;
}

console.log('Some Process');
multiInfinity_async_await().then( (result) => console.log(typeof result));
console.log('Some Process');