const $ = document;

const divform = $.createElement("div");
const form = $.createElement("form");
const listQuestions = $.createElement("form");

const header = $.createElement("header");
const h2 = $.createElement("h2");
const title = $.createElement("div");
const labelInputTitle = $.createElement("label");
const inputTitle = $.createElement("input");
const p = $.createElement("p");
const text = $.createElement("div");
const question = $.createElement("div");
const labelInputText = $.createElement("label");
const inputText = $.createElement("input");
const labelButton = $.createElement("label");
const button = $.createElement("button");
const titleAnket = $.createElement("div");
const list = $.createElement("ul");

divform.appendChild(form);
divform.appendChild(listQuestions);
form.appendChild(header);
form.appendChild(title);
form.appendChild(labelInputTitle);
form.appendChild(p);
form.appendChild(text);
form.appendChild(question);
listQuestions.appendChild(titleAnket);
listQuestions.appendChild(list);
header.appendChild(h2);
labelInputTitle.appendChild(inputTitle);
question.appendChild(labelInputText);
question.appendChild(labelButton);
labelInputTitle.appendChild(inputTitle);
labelInputText.appendChild(inputText);
labelButton.appendChild(button);

$.body.appendChild(divform);

h2.textContent = "Создание опроса";
title.textContent = "Название анкеты";
text.textContent = "Текст вопроса";
button.textContent = "+";

divform.id = "div_form";
form.id = "form";
header.classList.add("header");
title.classList.add("title");
inputTitle.classList.add("input");
inputTitle.id = "inputTitle";
text.classList.add("title");
question.classList.add("question");
inputText.classList.add("input");
inputText.id = "inputText";
button.classList.add("button");
listQuestions.id = "form";
listQuestions.classList.add("listQuestions");
titleAnket.classList.add("title", "size-m");
list.classList.add("list");

$.addEventListener("submit", (e) => { e.preventDefault() });

let ind = 0;

const isEmpty = (arg) => {
    if (!arg) {
        alert("Одно из полей ввода пустое")
        return true;
    }
    return false;
}
button.addEventListener("click", () => {
    const title = inputTitle.value.trim();
    const text = inputText.value.trim();

    if (isEmpty(title) || isEmpty(text)) return;

    listQuestions.classList.replace("listQuestions", "listQuestions_visible")
    const quest = $.createElement("li");
    list.appendChild(quest);
    titleAnket.textContent = title;
    quest.textContent = "Вопрос №" + ++ind + '\r\n' + text;
})
