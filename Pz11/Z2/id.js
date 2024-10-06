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

function setConvertListener(btn, converter) {
    btn.addEventListener("click", () => {
        let sentence = for_input.value;
        if (!sentence) {
            alert("Вы не ввели предложение");
            return;
        };
        for_input.value = converter(sentence);
    });
};

setConvertListener(button_1, (s) => s[0].toUpperCase() + s.slice(1));
setConvertListener(button_2, (s) => s.replace(/\s/g, ""));
setConvertListener(button_3, (s) => {
    const mark = [".", "?", "!"];
    const lastEl = s[s.length - 1];
    let markRight = mark.reduce((prev, val) => prev || val === lastEl, false);
    return markRight ? s.replace(lastEl, ".", -1) : s + ".";
});
setConvertListener(button_4, (s) => s.length > 100 ? s.slice(0, 100) + "..." : s);