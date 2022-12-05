// p3 Palindrome number chk
function palindrone(n) {
    n.split('');
    for (i = 0, j = n.length - 1; i < j; i++, j--) {
        if (n[i] !== n[j]) {
            return false
        }
        return true;
    }
}
n = "ancna"
console.log(palindrone(n));
