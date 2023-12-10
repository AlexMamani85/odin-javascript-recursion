function fibs(input) {
    var fib = [0, 1];
    for (let i = 2; i <= input; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;

}

console.log(fibs(8));

function fibsRec(input) {
    if (input === 1) {
        return [0, 1];
    } else {
        let fib = fibsRec(input - 1);
        fib[input] = fib[input - 1] + fib[input - 2];
        return fib;
    }
}

console.log( fibsRec(8));