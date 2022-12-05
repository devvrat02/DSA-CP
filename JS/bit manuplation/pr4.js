// Number of 1 Bits

class Solution {
    setBits(n) {
        //your code here
        let ans = 0
        while (n) {
            ans++;
            n = n & (n - 1);
        }
        return ans;
    }
}
let bitcal = new Solution();
console.log(bitcal.setBits(12));