const $ = document;

const divform = $.createElement("div");
const form = $.createElement("form");

const header = $.createElement("header");
const h2 = $.createElement("h2");
const titles = $.createElement("div");
const titles__itemName = $.createElement("div");
const nameP = $.createElement("p");
const titles__itemLastname = $.createElement("div");
const lastnameP = $.createElement("p");
const titles__itemGroup = $.createElement("div");
const groupP = $.createElement("p");
const p1 = $.createElement("p");
const input = $.createElement("div");
const labelInput__itemName = $.createElement("label");
const input__itemName = $.createElement("input");
const labelInput__itemLastname = $.createElement("label");
const input__itemLastname = $.createElement("input");
const labelInput__itemGroup = $.createElement("label");
const input__itemGroup = $.createElement("input");
const p2 = $.createElement("p");
const btn = $.createElement("div");
const labelButton = $.createElement("label");
const button = $.createElement("button");

divform.appendChild(form);
form.appendChild(header);
form.appendChild(p1);
form.appendChild(titles);
form.appendChild(input);
form.appendChild(p2);
form.appendChild(btn);
btn.appendChild(labelButton);
header.appendChild(h2);
titles.appendChild(titles__itemName);
titles.appendChild(titles__itemLastname);
titles.appendChild(titles__itemGroup);
input.appendChild(labelInput__itemName);
input.appendChild(labelInput__itemLastname);
input.appendChild(labelInput__itemGroup);
labelButton.appendChild(button);
titles__itemName.appendChild(nameP);
titles__itemLastname.appendChild(lastnameP);
titles__itemGroup.appendChild(groupP);
labelInput__itemName.appendChild(input__itemName);
labelInput__itemLastname.appendChild(input__itemLastname);
labelInput__itemGroup.appendChild(input__itemGroup);

$.body.appendChild(divform);

h2.textContent = "Анкета";
nameP.textContent = "Имя";
lastnameP.textContent = "Фамилия";
groupP.textContent = "Группа";
button.textContent = "Начать анкетирование";

divform.id = "div_form";
form.id = "form";
header.classList.add("header");
titles.classList.add("titles");
titles__itemName.classList.add("titles__item", "otstup");
titles__itemLastname.classList.add("titles__item", "otstup");
titles__itemGroup.classList.add("titles__item");
input.classList.add("input");
input__itemName.classList.add("input__item");
input__itemName.id = "input_1";
input__itemName.dataset.error = "Вы не внесли имя или внесли его некорректно";
input__itemLastname.classList.add("input__item");
input__itemLastname.id = "input_2";
input__itemLastname.dataset.error = "Вы не внесли фамилию или внесли ее некорректно";
input__itemGroup.classList.add("input__item");
input__itemGroup.id = "input_3";
input__itemGroup.dataset.error = "Вы не внесли группу";
btn.classList.add("btns");
button.classList.add("button");

const result = $.createElement("form");
const titlesResult = $.createElement("div");
const titlesResult__itemName = $.createElement("div");
const titlesResult__itemLastname = $.createElement("div");
const titlesResult__itemGroup = $.createElement("div");
const titlesResult__itemResult = $.createElement("div");
const titlesResult__itemAnswer1 = $.createElement("div");
const titlesResult__itemAnswer2 = $.createElement("div");
const titlesResult__itemAnswer3 = $.createElement("div");
const titlesResult__itemAnswer4 = $.createElement("div");
const titlesResult__itemAnswer5 = $.createElement("div");

divform.appendChild(result);
result.appendChild(titlesResult);
titlesResult.appendChild(titlesResult__itemName);
titlesResult.appendChild(titlesResult__itemLastname);
titlesResult.appendChild(titlesResult__itemGroup);
titlesResult.appendChild(titlesResult__itemResult);
titlesResult.appendChild(titlesResult__itemAnswer1);
titlesResult.appendChild(titlesResult__itemAnswer2);
titlesResult.appendChild(titlesResult__itemAnswer3);
titlesResult.appendChild(titlesResult__itemAnswer4);
titlesResult.appendChild(titlesResult__itemAnswer5);

result.classList.add("result");
titlesResult.classList.add("titles-result");
titlesResult__itemName.classList.add("titles-result__item");
titlesResult__itemLastname.classList.add("titles-result__item");
titlesResult__itemGroup.classList.add("titles-result__item");
titlesResult__itemResult.classList.add("titles-result__item", "size-m");
titlesResult__itemAnswer1.classList.add("titles-result__item");
titlesResult__itemAnswer2.classList.add("titles-result__item");
titlesResult__itemAnswer3.classList.add("titles-result__item");
titlesResult__itemAnswer4.classList.add("titles-result__item");
titlesResult__itemAnswer5.classList.add("titles-result__item");

$.addEventListener("submit", (e) => { e.preventDefault() });

const isWords = (str) => /^[a-zA-Zа-яА-Я]*$/.test(str);
const isNumeric = (str) => /^[0-9]*$/.test(str);
const check = (answer, condition, convertor) => {
    while (condition(answer) || !(answer.trim())) {
        alert("Вы ввели некорректный ответ");
        answer = convertor();
    }
}
const isEmpty = (item) => {
    if (!item.value.trim()) {
        alert(item.dataset.error);
        return true;
    }
    return false;
}
const isGood = (item) => {
    if (!isWords(item.value.trim())) {
        alert(item.dataset.error);
        return;
    }
    return true;
}

button.addEventListener("click", () => {
    const name = (input__itemName.value).trim();
    const lastname = (input__itemLastname.value).trim();
    const group = (input__itemGroup.value).trim();

    if (isEmpty(input__itemName) || !isGood(input__itemName)) return;
    if (isEmpty(input__itemLastname) || !isGood(input__itemLastname)) return;
    if (isEmpty(input__itemGroup)) return;

    let answer1 = prompt('Сколько тебе лет?');
    check(answer1, (ans) => !isNumeric(ans), () => answer1 = prompt('Сколько тебе лет?'));

    let answer2 = prompt('Из какого ты города?');
    check(answer2, (ans) => !isWords(ans), () => answer2 = prompt('Из какого ты города?'));

    let answer3 = prompt('Ты lalala или okeoke?');
    check(answer3, (ans) => !(ans == "lalala" || ans == "okeoke"), () => answer3 = prompt('Ты lalala или okeoke?'));

    let answer4 = prompt('Какой у тебя номер телефона?');
    check(answer4, (ans) => !isNumeric(ans), () => answer4 = prompt('Какой у тебя номер телефона?'));

    let answer5 = prompt('Продолжи фразу: арбуз арбуз...');
    check(answer5, (ans) => !isWords(ans), () => answer5 = prompt('Продолжи фразу: арбуз арбуз...'));

    titlesResult__itemName.textContent = "Имя: " + name;
    titlesResult__itemLastname.textContent = "Фамилия: " + lastname;
    titlesResult__itemGroup.textContent = "Группа: " + group;
    titlesResult__itemResult.textContent = "Результаты анкетирования:";
    titlesResult__itemAnswer1.textContent = "Возраст: " + answer1;
    titlesResult__itemAnswer2.textContent = "Город: " + answer2;
    titlesResult__itemAnswer3.textContent = "Lalala или okeoke: " + answer3
    titlesResult__itemAnswer4.textContent = "Телефон: " + answer4;
    titlesResult__itemAnswer5.textContent = "Арбуз арбуз: " + answer5;

    if (!$.querySelector('result_visible')) {
        result.classList.replace("result", "result_visible");
    }
})