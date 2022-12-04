// Find the only non-repeating element in an array where every other element repeats thrice.

function findunique(arr, n = arr.length, k = 3) {
    let size = 8 * 4;
    let cnt = Array.from({ length: size }, (_, i) => 0);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < n; j++) {
            if ((arr[j] & (1 << i)) != 0)
                cnt[i] += 1;
        }
    }
    let ans = 0;
    for (let i = 0; i < size; i++) {
        ans += (cnt[i] % k) * 1 << i;
    }
    return ans / (n % k)
}


let arr = [1, 2, 1, 1, 5, 2, 2];
console.log(findunique(arr));

