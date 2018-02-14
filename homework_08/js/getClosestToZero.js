function getClosestToZero() {
    let num = arguments[0] ? arguments[0] : "you didn\'t input any numbers";
    for (let i = 1; i < arguments.length; i++) {
        num = Math.abs(num) > Math.abs(arguments[i]) ? arguments[i] : num;
    }
    return num;
}
