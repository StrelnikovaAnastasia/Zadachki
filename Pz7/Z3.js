let wordsArray = ["поешь", "еще", "этих", "мягких", "француских", "булок"];
function phrase(Arr) {
    let str= "";
    for (let value of Arr) 
    {
        str += String(value) + " ";
    }
    return str;
}

let res = phrase(wordsArray);
console.log(res);
