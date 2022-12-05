// p2 Trailing zero in Factorial
function trailing_Zero(n) {
    let ans = 0;
    for (let i = 5; i <= n; i = i * 5) {
        ans += n / i;
    }
    return ans
}
n = 125
console.log(trailing_Zero(n));
