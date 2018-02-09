let n = Number(prompt("Enter a natural number between 0 and 20"));

if (n == 0 || n > 20) {
    console.error("Incorrect!");
} else {
    console.log(makePiramid(n));
}

function makePiramid(a) {
    let message = "",
        s1 = "[~]",
        s2 = "   ",
        s3 = "\n",
        spases = a - 1;

    for (let i=1; i<=a; i++) {
        for (let j=0; j<spases; j++) {
          message += s2;
        }
        for (let z=0; z<2*i-1; z++) {
          message += s1;
        }
        message += s3;
        spases--;
    }
    return message;
}
