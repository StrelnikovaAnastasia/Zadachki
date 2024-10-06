const $ = document;

const divForm = $.createElement("div");
const form = $.createElement("form");

const header = $.createElement("header");
const size = $.createElement("h3");
const pf = $.createElement("p");
const titles = $.createElement("div");
const text_1 = $.createElement("div");
const text_2 = $.createElement("div");
const text_3 = $.createElement("div");
const input = $.createElement("div");
const intLabel_1 = $.createElement("label");
const input_1 = $.createElement("input");
const intLabel_2 = $.createElement("label");
const input_2 = $.createElement("input");
const intLabel_3 = $.createElement("label");
const input_3 = $.createElement("input");
const text = $.createElement("div");
const intLabel_text = $.createElement("label");
const input_text = $.createElement("input");
const btnLabel = $.createElement("label");
const button = $.createElement("button");
const text_postcard_1 = $.createElement("div");
const text_postcard_2 = $.createElement("div");
const head_postcard = $.createElement("div");

divForm.appendChild(form);
form.appendChild(header);
form.appendChild(titles);
form.appendChild(input);
form.appendChild(text);
form.appendChild(intLabel_text);
form.appendChild(pf);
form.appendChild(btnLabel);
header.appendChild(size);
titles.appendChild(text_1);
titles.appendChild(text_2);
titles.appendChild(text_3);
input.appendChild(intLabel_1);
input.appendChild(intLabel_2);
input.appendChild(intLabel_3);
intLabel_text.appendChild(input_text);
btnLabel.appendChild(button);
intLabel_1.appendChild(input_1);
intLabel_2.appendChild(input_2);
intLabel_3.appendChild(input_3);

$.body.appendChild(divForm);

size.textContent = "Создание открытки";
text_1.textContent = "Отправитель";
text_2.textContent = "Адресат";
text_3.textContent = "Заголовок";
text.textContent = "Текст сообщения";
button.textContent = "Отправить";

divForm.id = "div_form";
form.id = "form";
header.classList.add("header");
titles.classList.add("titles");
text_1.classList.add("titles__item", "otstup");
text_2.classList.add("titles__item", "otstup");
text_3.classList.add("titles__item", "otstup");
input.classList.add("input");
input_1.id = "input_1";
input_1.classList.add("input__item");
input_2.id = "input_2";
input_2.classList.add("input__item");
input_3.id = "input_3";
input_3.classList.add("input__item");
text.classList.add("text");
text.classList.add("titles__item");
input_text.classList.add("input_text");
button.classList.add("button");

const postcard = $.createElement("form");
const titles_postcard = $.createElement("div");
const text_1_postcard = $.createElement("div");
const text_2_postcard = $.createElement("div");
const text_3_postcard = $.createElement("div");
const text_4_postcard = $.createElement("div");

divForm.appendChild(postcard);
postcard.appendChild(titles_postcard);
titles_postcard.appendChild(text_1_postcard);
titles_postcard.appendChild(text_2_postcard);
titles_postcard.appendChild(text_3_postcard);
titles_postcard.appendChild(text_4_postcard);

postcard.classList.add("postcard");
titles_postcard.classList.add("titles", "theme-postcard");
text_1_postcard.classList.add("titles__item");
text_2_postcard.classList.add("titles__item");
text_3_postcard.classList.add("titles__item", "size-m");
text_4_postcard.classList.add("titles__item");

$.addEventListener("submit", (e) => { e.preventDefault() });

button.addEventListener("click", () => {
    text_1_postcard.textContent = "Отправитель: " + input_1.value;
    text_2_postcard.textContent = "Адресат: " + input_2.value;
    text_3_postcard.textContent = input_3.value;
    text_4_postcard.textContent = input_text.value;

    if (!$.querySelector('postcard_visible')) {
        postcard.classList.replace("postcard", "postcard_visible");
    }
})