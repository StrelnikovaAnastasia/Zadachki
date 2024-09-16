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
    dots.forEach((item1) => {
        dots.forEach(item2 => {
            switch (searchNeibours(item1, item2)) {
                case -1:
                    return ++niz;
                case 0:
                    return ++ver;
                case 1:
                    return ++lev;
                case 2:
                    return ++pr;
            }

        })
        if (niz>=1 && ver>=1 && lev>=1 && pr>=1) {
            k++;
        }
        niz = 0;
        ver = 0;
        lev = 0;
        pr = 0;

    })
    return k;

}

function searchNeibours(item1, item2) {
    if (item1[0] === item2[0] && item1[1] > item2[1]) {
        return -1;
    }
    if (item1[0] === item2[0] && item1[1] < item2[1]) {
        return 0;
    }
    if (item1[0] > item2[0] && item1[1] === item2[1]) {
        return 1;
    }
    if (item1[0] < item2[0] && item1[1] === item2[1]) {
        return 2;
    }
}

console.log(central(dots));
