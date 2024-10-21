let wordsArray = ["поешь", "еще", "этих", "мягких", "француских", "булок"];
function phrase(arr) {
    let str = "";
    for (let value of arr) {
        str += String(value) + " ";
    }
    return str;
}

let res = phrase(wordsArray);
console.log(res);
