function getMin() {
    let min = arguments[0] ? arguments[0] : "you didn\'t input any numbers";
    for (let i = 1; i < arguments.length; i++) {
        min = arguments[i] < min ? arguments[i] : min;
    }
    return min;
}
