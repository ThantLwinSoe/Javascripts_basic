const generateCounter = (count) => {

    let temp = count;
    return () => {
        return temp++;
    }
}

const counting = generateCounter(10);

console.log(counting());
console.log(counting());
console.log(counting());
console.log(counting());