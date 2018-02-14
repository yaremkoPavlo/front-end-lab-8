function isPrime(n) {
    if (n == 2 || n == 3) {
        return true;
    } else if (n%2 == 0 || n%3 == 0) {
        return false;
    } else {
        for (let i = 1; 6*i-1 <= n; i++) {
            if (i*6-1 == n || i*6+1 == n) {
                return true;
            }
        }
        return false;
    }
}
