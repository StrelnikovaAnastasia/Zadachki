const $ = document;

const divForm = $.createElement("div");
const form = $.createElement("form");

const header = $.createElement("div");
const h3 = $.createElement("h3");
const inputLabel = $.createElement("label");
const input = $.createElement("div");
const p = $.createElement("p");
const input__item = $.createElement("input");
const btn = $.createElement("div");
const buttonLetterLabel = $.createElement("label");
const btn__buttonLetter = $.createElement("button");
const buttonSpaceLabel = $.createElement("label");
const btn__buttonSpace = $.createElement("button");
const buttonDotLabel = $.createElement("label");
const btn__buttonDot = $.createElement("button");
const buttonEllipsisLabel = $.createElement("label");
const btn__buttonEllipsis = $.createElement("button");

divForm.appendChild(form);
form.appendChild(header);
form.appendChild(p);
form.appendChild(input);
form.appendChild(p);
form.appendChild(btn);
header.appendChild(h3);
input.appendChild(inputLabel);
inputLabel.appendChild(input__item);
btn.appendChild(buttonLetterLabel);
btn.appendChild(buttonSpaceLabel);
btn.appendChild(buttonDotLabel);
btn.appendChild(buttonEllipsisLabel);
btn.appendChild(buttonEllipsisLabel);
buttonLetterLabel.appendChild(btn__buttonLetter);
buttonSpaceLabel.appendChild(btn__buttonSpace);
buttonDotLabel.appendChild(btn__buttonDot);
buttonEllipsisLabel.appendChild(btn__buttonEllipsis);

$.body.appendChild(divForm);

h3.textContent = "Работа с предложением";
btn__buttonLetter.textContent = "Сделать первую букву заглавной";
btn__buttonSpace.textContent = "Убрать лишние пробелы";
btn__buttonDot.textContent = "Поставить точку";
btn__buttonEllipsis.textContent = "Поставить многоточие";

divForm.id = "div_form";
form.id = "form";
input.id = "input";
input__item.id = "input__item";
header.classList.add("header");
input.classList.add("input");
input__item.classList.add("input__item");
btn.classList.add("btn");
btn__buttonLetter.id = "button";
btn__buttonSpace.id = "button";
btn__buttonDot.id = "button";
btn__buttonEllipsis.id = "button";

$.addEventListener("submit", (e) => { e.preventDefault() });

const isSentence = (str) => /^[a-zA-Zа-яА-Я]*|[,.?!]*$/.test(str);

function setConvertListener(btn, converter) {
    btn.addEventListener("click", () => {
        let sentence = input__item.value.trim();
        if (!sentence || !isSentence(sentence)) {
            alert("Вы некорректно ввели предложение");
            return;
        };
        input__item.value = converter(sentence);
    });
};

setConvertListener(btn__buttonLetter, (s) => s[0].toUpperCase() + s.slice(1));
setConvertListener(btn__buttonSpace, (s) => s.replace(/\s/g, ""));
setConvertListener(btn__buttonDot, (s) => {
    const mark = [".", "?", "!"];
    const lastEl = s[s.length - 1];
    let markRight = mark.reduce((prev, val) => prev || val === lastEl, false);
    return markRight ? s.replace(lastEl, ".", -1) : s + ".";
});
setConvertListener(btn__buttonEllipsis, (s) => s.length > 100 ? s.slice(0, 100) + "..." : s);