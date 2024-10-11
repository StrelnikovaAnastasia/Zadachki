const $ = document;

const divform = $.createElement("div");
const form = $.createElement("form");
const listQuestions = $.createElement("form");

const header = $.createElement("header");
const h2 = $.createElement("h2");
const title = $.createElement("div");
const label_input_title = $.createElement("label");
const input_title = $.createElement("input");
const p = $.createElement("p");
const text = $.createElement("div");
const question = $.createElement("div");
const label_input_text = $.createElement("label");
const input_text = $.createElement("input");
const label_button = $.createElement("label");
const button = $.createElement("button");
const title_anket = $.createElement("div");
const list = $.createElement("ul");

divform.appendChild(form);
divform.appendChild(listQuestions);
form.appendChild(header);
form.appendChild(title);
form.appendChild(label_input_title);
form.appendChild(p);
form.appendChild(text);
form.appendChild(question);
listQuestions.appendChild(title_anket);
listQuestions.appendChild(list);
header.appendChild(h2);
label_input_title.appendChild(input_title);
question.appendChild(label_input_text);
question.appendChild(label_button);
label_input_title.appendChild(input_title);
label_input_text.appendChild(input_text);
label_button.appendChild(button);

$.body.appendChild(divform);

h2.textContent = "Создание опроса";
title.textContent = "Название анкеты";
text.textContent = "Текст вопроса";
button.textContent = "+";

divform.id = "div_form";
form.id = "form";
header.classList.add("header");
title.classList.add("title");
input_title.classList.add("input");
input_title.id = "input_title";
text.classList.add("title");
question.classList.add("question");
input_text.classList.add("input");
input_text.id = "input_text";
button.classList.add("button");
listQuestions.id = "form";
listQuestions.classList.add("listQuestions");
title_anket.classList.add("title", "size-m");
list.classList.add("list");

$.addEventListener("submit", (e) => { e.preventDefault() });

let k = 0;

button.addEventListener("click", () => {
    if (!input_title.value) {
        alert("Вы не внесли название анкеты")
        return;
    };
    if (!input_text.value) {
        alert("Вы не внесли текст вопроса")
        return;
    };
    k++;
    listQuestions.classList.replace("listQuestions", "listQuestions_visible")
    const quest = $.createElement("li");
    list.appendChild(quest);
    title_anket.textContent = input_title.value;
    quest.textContent = "Вопрос №" + k + '\r\n' + input_text.value;
})
