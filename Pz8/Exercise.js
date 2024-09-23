// 1
let firstArray = [1, 2, 3, "n", 5, 6, 7, 8, 9, 10];
let secondArray = [1, 2, 3, 4, 5, 6, 7, "n", 9, 10];

// 1.1

function closeToN(arr) {
    let ind = arr.indexOf("n", 0);
    let newArray = [];
    newArray.push(arr[ind - 1], arr[ind + 1]);
    return newArray;
}

console.log(closeToN(secondArray));

// 1.2

function numbersAfterN(arr) {
    let ind = arr.indexOf("n", 0);
    return newArray = arr.slice([ind + 1]);
}

console.log(numbersAfterN(firstArray));

// 1.3

function mergerNumbersAfterN(arr1, arr2) {
    let ind1 = arr1.indexOf("n", 0);
    let ind2 = arr2.indexOf("n", 0);
    let moreArr = arr1.slice([ind1 + 1]);
    let lessArr = arr2.splice([0], ind2);
    let newArray = [];
    return newArray.concat(moreArr, lessArr);
}

console.log(mergerNumbersAfterN(firstArray, secondArray));

// 2
var arr = [1, 2, 3, 4];

// 2.1

// function factorial(arr)
// {
// arr.forEach(n => {
// console.log("Факториал числа ", n, " = ", Math.fact(n))
// });
// }

// factorial(arr);

// 2.2

function reverseString(arr) {
    return str = arr.reverse().join('-');
}

console.log(reverseString(arr));

// 3
var str = "?Я?предпочитаю?вести?здоровый?образ?жизни";

//3.1

function splitStr(str) {
    return str.split('?').slice(1);
}

console.log(splitStr(str));

// 3.2

function toEnd(str, underStr) {
    let ind = str.indexOf(underStr, 0);
    let res = "";
    if (ind != -1) {
        res = str.slice(ind);
    }
    return res
}

console.log(toEnd(str, "здоровый"));

//4

var str = "JavaScript";

// 4.1

function toCase(ind, str) {
    if (str[ind] == str[ind].toUpperCase()) {
        return str.toUpperCase();
    }
    return str.toLowerCase();
}

console.log(toCase(0, str));

// 4.2

function startOrEnd(str, underStr) {
    return str.endsWith(underStr) || str.startsWith(underStr);
}

console.log(startOrEnd(str, 'Ja'));