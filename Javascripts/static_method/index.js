class Calculator {

    static add(a , b) {
        return a + b;
    }

    static sub( a , b) {

        return a - b;
    }

    static multiply(a , b) {
        return a * b;

    }

    static div(a , b){
        return a / b ;
    }
} 

console.log(Calculator.add( 10 , 10))
console.log(Calculator.sub( 100 , 95))
console.log(Calculator.div(100 , 2))
console.log(Calculator.multiply( 2 , 2))