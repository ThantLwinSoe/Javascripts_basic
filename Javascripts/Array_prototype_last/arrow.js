Array.prototype.last = (arr) => {

    if(arr.length === 0) {
        return -1;
    } else{
        return arr[arr.length - 1];
    }
}

const empty = [];
const array = [11,22,33,44,55];

console.log(empty.last(empty));
console.log(array.last(array));