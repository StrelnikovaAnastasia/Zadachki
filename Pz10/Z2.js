const dots = [
    [0, 0], [0, 1], [0, -1], [1, 0],
    [-1, 0], [4, 5], [4, 4], [3, 4],
    [4, 3], [3, 3], [11, 2], [5, 5],
    [6, 9], [3, 6], [1, 4], [9, 1],
    [7, 10], [4, -1], [-3, 0], [-5, 2],
    [0, 2], [0, 2], [3, 2],
    [-2, 0], [4, 5], [4, 4],
    [4, 6], [5, 3], [3, -1], [3, 0],
    [6, 9], [2, 6], [3, -7], [6, 7],
    [7, 10], [4, -1], [-5, 2], [-1, 2]

]

function central(dots) {
    let niz = 0, ver = 0, lev = 0, pr = 0, k = 0;
    dots.forEach((point1) => {
        dots.forEach(point2 => {
            switch (searchNeibours(point1, point2)) {
                case 0:
                    return ++niz;
                case 1:
                    return ++ver;
                case 2:
                    return ++lev;
                case 3:
                    return ++pr;
            }

        })
        const test = proverka([niz, ver, lev, pr]);
        if (test) {
            k++;
        }
        niz = 0;
        ver = 0;
        lev = 0;
        pr = 0;

    })
    return k;

}

function searchNeibours(point1, point2) {
    let res = -1;
    const x1 = point1[0];
    const x2 = point2[0];
    const y1 = point1[1];
    const y2 = point2[1];

    if (x1 === x2 && y1 > y2) {
        res = 0;
    }
    if (x1 === x2 && y1 < y2) {
        res = 1;
    }
    if (x1 > x2 && y1 === y2) {
        res = 2;
    }
    if (x1 < x2 && y1 === y2) {
        res = 3;
    }
    return res;
}

const proverka = (arr) => {
    let flag = true;
    arr.forEach((item) => {
        if (item < 1) {
            flag = false
        };
    })
    return flag;
}

console.log(central(dots));
