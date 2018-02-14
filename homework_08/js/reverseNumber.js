function reverseNumber(n) {
    let negative = false;
    if (n < 0) {
        negative = true;
    }
    n = n.toString().split("").reverse().join("");
    if (negative) {
        n = "-" + n;
    }
    return parseInt(n);
}
