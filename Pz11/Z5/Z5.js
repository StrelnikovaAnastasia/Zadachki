const $ = document;

const divform = $.createElement("div");
const form = $.createElement("form");

const header = $.createElement("header");
const h2 = $.createElement("h2");
const titles = $.createElement("div");
const titles__item_name = $.createElement("div");
const nameP = $.createElement("p");
const titles__item_lastname = $.createElement("div");
const lastnameP = $.createElement("p");
const titles__item_group = $.createElement("div");
const groupP = $.createElement("p");
const p_1 = $.createElement("p");
const input = $.createElement("div");
const label_input__item_name = $.createElement("label");
const input__item_name = $.createElement("input");
const label_input__item_lastname = $.createElement("label");
const input__item_lastname = $.createElement("input");
const label_input__item_group = $.createElement("label");
const input__item_group = $.createElement("input");
const p_2 = $.createElement("p");
const label_button = $.createElement("label");
const button = $.createElement("button");

divform.appendChild(form);
form.appendChild(header);
form.appendChild(titles);
form.appendChild(p_1);
form.appendChild(input);
form.appendChild(p_2);
form.appendChild(label_button);
header.appendChild(h2);
titles.appendChild(titles__item_name);
titles.appendChild(titles__item_lastname);
titles.appendChild(titles__item_group);
input.appendChild(label_input__item_name);
input.appendChild(label_input__item_lastname);
input.appendChild(label_input__item_group);
label_button.appendChild(button);
titles__item_name.appendChild(nameP);
titles__item_lastname.appendChild(lastnameP);
titles__item_group.appendChild(groupP);
label_input__item_name.appendChild(input__item_name);
label_input__item_lastname.appendChild(input__item_lastname);
label_input__item_group.appendChild(input__item_group);

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
titles__item_name.classList.add("titles__item", "otstup");
titles__item_lastname.classList.add("titles__item", "otstup");
titles__item_group.classList.add("titles__item");
input.classList.add("input");
input__item_name.classList.add("input__item");
input__item_name.id = "input_1";
input__item_lastname.classList.add("input__item");
input__item_lastname.id = "input_2";
input__item_group.classList.add("input__item");
input__item_group.id = "input_3";
button.classList.add("button");

const result = $.createElement("form");
const titles_result = $.createElement("div");
const titles_result__item_name = $.createElement("div");
const titles_result__item_lastname = $.createElement("div");
const titles_result__item_group = $.createElement("div");
const titles_result__item_result = $.createElement("div");
const titles_result__item_answer1 = $.createElement("div");
const titles_result__item_answer2 = $.createElement("div");
const titles_result__item_answer3 = $.createElement("div");
const titles_result__item_answer4 = $.createElement("div");
const titles_result__item_answer5 = $.createElement("div");

divform.appendChild(result);
result.appendChild(titles_result);
titles_result.appendChild(titles_result__item_name);
titles_result.appendChild(titles_result__item_lastname);
titles_result.appendChild(titles_result__item_group);
titles_result.appendChild(titles_result__item_result);
titles_result.appendChild(titles_result__item_answer1);
titles_result.appendChild(titles_result__item_answer2);
titles_result.appendChild(titles_result__item_answer3);
titles_result.appendChild(titles_result__item_answer4);
titles_result.appendChild(titles_result__item_answer5);

result.classList.add("result");
titles_result.classList.add("titles-result");
titles_result__item_name.classList.add("titles-result__item");
titles_result__item_lastname.classList.add("titles-result__item");
titles_result__item_group.classList.add("titles-result__item");
titles_result__item_result.classList.add("titles-result__item", "size-m");
titles_result__item_answer1.classList.add("titles-result__item");
titles_result__item_answer2.classList.add("titles-result__item");
titles_result__item_answer3.classList.add("titles-result__item");
titles_result__item_answer4.classList.add("titles-result__item");
titles_result__item_answer5.classList.add("titles-result__item");

$.addEventListener("submit", (e) => { e.preventDefault() });

button.addEventListener("click", () => {
    if (!input__item_name.value) {
        alert("Вы не внесли свое имя");
        return;
    };
    if (!input__item_lastname.value) {
        alert("Вы не внесли свою фамилию");
        return;
    };
    if (!input__item_group.value) {
        alert("Вы не внесли свою группу");
        return;
    };
    const answer1 = prompt('Сколько тебе лет?');
    const answer2 = prompt('Из какого ты города?');
    const answer3 = prompt('Ты lalala или okeoke?');
    const answer4 = prompt('Какой у тебя телефон?');
    const answer5 = prompt('Продолжи фразу: арбуз арбуз...');

    titles_result__item_name.textContent = "Имя: " + input__item_name.value;
    titles_result__item_lastname.textContent = "Фамилия: " + input__item_lastname.value;
    titles_result__item_group.textContent = "Группа: " + input__item_group.value;
    titles_result__item_result.textContent = "Результаты анкетирования:";
    titles_result__item_answer1.textContent = "Возраст: " + answer1;
    titles_result__item_answer2.textContent = "Город: " + answer2;
    titles_result__item_answer3.textContent = "Lalala или okeoke: " + answer3
    titles_result__item_answer4.textContent = "Телефон: " + answer4;
    titles_result__item_answer5.textContent = "Арбуз арбуз: " + answer5;

    if (!$.querySelector('result_visible')) {
        result.classList.replace("result", "result_visible");
    }
})