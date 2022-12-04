// Find the only non-repeating element in an array where every other element repeats twice

function uniqueint(arr) {
    let ans = arr[0];
    for (let i = 1; i < arr.length; i++) {
        ans ^= arr[i];
    }
    return ans;
}
let arr = [1, 2, 1, 3, 3, 2, 5, 4, 5];
console.log(uniqueint(arr));