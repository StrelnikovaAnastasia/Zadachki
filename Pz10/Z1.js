const vichitanie = (a, b) => {
    for (let i = 1; i <= b; i++) {
        (a % 10 === 0) ? a /= 10 : a -= 1;
    }
    return a;
}

console.log(vichitanie(90000400001240, 24));