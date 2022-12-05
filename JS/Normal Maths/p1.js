// p1 Factorial of a number

function fact(n) {
    if (n == 0) return 1;
    return n * fact(n - 1);
}
function fact2(n) {
    if (n == 0 || n == 1) return 1;
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans *= i;
    }
    return ans;
}

let n = 5;
console.log(fact(n));
console.log(fact2(n));
