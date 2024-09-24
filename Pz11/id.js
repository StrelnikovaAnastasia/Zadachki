const $ = document;

const divForm = $.createElement("div");
const form = $.createElement("form");

const text_name = $.createElement("div");
const title = $.createElement("h3");
const inputLabel = $.createElement("label");
const form_input = $.createElement("div");
const abP = $.createElement("p");
const for_input = $.createElement("input");
const btn = $.createElement("div");
const buttonLabel_1 = $.createElement("label");
const button_1 = $.createElement("button");
const buttonLabel_2 = $.createElement("label");
const button_2 = $.createElement("button");
const buttonLabel_3 = $.createElement("label");
const button_3 = $.createElement("button");
const buttonLabel_4 = $.createElement("label");
const button_4 = $.createElement("button");

divForm.appendChild(form);
form.appendChild(text_name);
form.appendChild(abP);
form.appendChild(form_input);
form.appendChild(abP);
form.appendChild(btn);
text_name.appendChild(title);
form_input.appendChild(inputLabel);
inputLabel.appendChild(for_input);
btn.appendChild(buttonLabel_1);
btn.appendChild(buttonLabel_2);
btn.appendChild(buttonLabel_3);
btn.appendChild(buttonLabel_4);
btn.appendChild(buttonLabel_4);
buttonLabel_1.appendChild(button_1);
buttonLabel_2.appendChild(button_2);
buttonLabel_3.appendChild(button_3);
buttonLabel_4.appendChild(button_4);

$.body.appendChild(divForm);

title.textContent = "Работа с предложением";
button_1.textContent = "Сделать первую букву заглавной";
button_2.textContent = "Убрать лишние пробелы";
button_3.textContent = "Поставить точку";
button_4.textContent = "Поставить многоточие";

divForm.id = "div_form";
form.id = "form";
form_input.id = "form_input";
for_input.id = "for_input";
text_name.classList.add("text_name");
form_input.classList.add("form_input");
for_input.classList.add("for_input");
btn.classList.add("btn");
button_1.id = "button";
button_2.id = "button";
button_3.id = "button";
button_4.id = "button";

$.addEventListener("submit", (e) => { e.preventDefault() });

//Сделать первую букву заглавной
button_1.addEventListener("click", () => {
    let sentence = for_input.value;
    if (!sentence) {
        alert("Вы не ввели предложение");
        return;
    };
    sentence = sentence[0].toUpperCase() + sentence.slice(1);
    for_input.value = sentence;
});

//Убрать лишние пробелы
button_2.addEventListener("click", () => {
    let sentence = for_input.value;
    if (!sentence) {
        alert("Вы не ввели предложение");
        return;
    };
    sentence = sentence.replace(/\s/g, "");
    for_input.value = sentence;
});

//Поставить точку
button_3.addEventListener("click", () => {
    let sentence = for_input.value;
    if (!sentence) {
        alert("Вы не ввели предложение");
        return;
    };
    const mark = [".", "?", "!"];
    const lastIndex = sentence.length - 1;
    const lastEl = sentence[lastIndex];
    let markRight = false;
    mark.forEach((item) => {
        if (item === lastEl) {
            markRight = true;
        };
    });
    if (markRight) {
        sentence = sentence.replace(lastEl, ".", -1);
    } else {
        sentence += ".";
    };
    for_input.value = sentence;
});

//Поставить многоточие
button_4.addEventListener("click", () => {
    let sentence = for_input.value;
    if (!sentence) {
        alert("Вы не ввели предложение");
        return;
    };
    let len = sentence.length;
    if (len > 100) {
        sentence = sentence.slice(0, 100) + "...";
    };
    for_input.value = sentence;
});