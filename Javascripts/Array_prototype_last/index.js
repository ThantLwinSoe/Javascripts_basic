Array.prototype.last = function () {

    if(this.length === 0){
        return -1;
    } else {
        return this[this.length - 1];
    }
}

const nums = [11,22,33,44];
const empty = [];

console.log(nums.last());
console.log(empty.last());