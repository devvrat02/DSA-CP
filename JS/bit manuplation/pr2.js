// Find the two non-repeating elements in an array where every other element repeats twice

function uniqueint(arr) {
    let ans = arr[0];
    for (let i = 1; i < arr.length; i++) {
        ans ^= arr[i];
    }
    return ans;
}
function uniqueintfor2(arr) {
    let ans = uniqueint(arr);
    ans = (ans & -ans);
    let a = 0, b = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] & ans) > 0) {
            a = a ^ arr[i];
        } else {
            b = b ^ arr[i];
        }
    }
    return [a, b];
}


let arr = [1, 2, 1, 9, 3, 3, 2, 5, 4, 5];
console.log(uniqueintfor2(arr));
