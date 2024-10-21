const $ = document;

const divForm = $.createElement("div");
const form = $.createElement("form");

const header = $.createElement("header");
const size = $.createElement("h3");
const p = $.createElement("p");
const titles = $.createElement("div");
const titles__itemSender = $.createElement("div");
const titles__itemRecipient = $.createElement("div");
const titles__itemHeader = $.createElement("div");
const input = $.createElement("div");
const itemSenderLabel = $.createElement("label");
const input__itemSender = $.createElement("input");
const itemRecipientLabel = $.createElement("label");
const input__itemRecipient = $.createElement("input");
const itemHeaderLabel = $.createElement("label");
const input__itemHeader = $.createElement("input");
const text = $.createElement("div");
const inputTextLabel = $.createElement("label");
const inputText = $.createElement("input");
const buttonLabel = $.createElement("label");
const button = $.createElement("button");

divForm.appendChild(form);
form.appendChild(header);
form.appendChild(titles);
form.appendChild(input);
form.appendChild(text);
form.appendChild(inputTextLabel);
form.appendChild(p);
form.appendChild(buttonLabel);
header.appendChild(size);
titles.appendChild(titles__itemSender);
titles.appendChild(titles__itemRecipient);
titles.appendChild(titles__itemHeader);
input.appendChild(itemSenderLabel);
input.appendChild(itemRecipientLabel);
input.appendChild(itemHeaderLabel);
inputTextLabel.appendChild(inputText);
buttonLabel.appendChild(button);
itemSenderLabel.appendChild(input__itemSender);
itemRecipientLabel.appendChild(input__itemRecipient);
itemHeaderLabel.appendChild(input__itemHeader);

$.body.appendChild(divForm);

size.textContent = "Создание открытки";
titles__itemSender.textContent = "Отправитель";
titles__itemRecipient.textContent = "Адресат";
titles__itemHeader.textContent = "Заголовок";
text.textContent = "Текст сообщения";
button.textContent = "Отправить";

divForm.id = "div_form";
form.id = "form";
header.classList.add("header");
titles.classList.add("titles");
titles__itemSender.classList.add("titles__item", "otstup");
titles__itemRecipient.classList.add("titles__item", "otstup");
titles__itemHeader.classList.add("titles__item", "otstup");
input.classList.add("input");
input__itemSender.id = "input__itemSender";
input__itemSender.classList.add("input__item");
input__itemSender.dataset.error = "Вы не ввели имя отправителя";
input__itemRecipient.id = "input__itemRecipient";
input__itemRecipient.classList.add("input__item");
input__itemRecipient.dataset.error = 'Вы не ввели имя адресата';
input__itemHeader.id = "input__itemHeader";
input__itemHeader.classList.add("input__item");
input__itemHeader.dataset.error = 'Вы не ввели заголовок';
text.classList.add("text");
text.classList.add("titles__item");
inputText.classList.add("inputText");
inputText.dataset.error = 'Вы не ввели текст сообщения';
button.classList.add("button");

const postcard = $.createElement("form");
const titlesPostcard = $.createElement("div");
const titlesPostcard__itemSender = $.createElement("div");
const titlesPostcard__itemRecipient = $.createElement("div");
const titlesPostcard__itemHeader = $.createElement("div");
const titlesPostcard__itemText = $.createElement("div");

divForm.appendChild(postcard);
postcard.appendChild(titlesPostcard);
titlesPostcard.appendChild(titlesPostcard__itemSender);
titlesPostcard.appendChild(titlesPostcard__itemRecipient);
titlesPostcard.appendChild(titlesPostcard__itemHeader);
titlesPostcard.appendChild(titlesPostcard__itemText);

postcard.classList.add("postcard");
titlesPostcard.classList.add("titles", "theme-postcard");
titlesPostcard__itemSender.classList.add("titles__item");
titlesPostcard__itemRecipient.classList.add("titles__item");
titlesPostcard__itemHeader.classList.add("titles__item", "size-m");
titlesPostcard__itemText.classList.add("titles__item");

$.addEventListener("submit", (e) => { e.preventDefault() });

const isEmpty = (item) => {
    if (!item.value.trim()) {
        alert(item.dataset.error)
        return true;
    }
    return false;
}

button.addEventListener("click", () => {
    const sender = input__itemSender.value.trim();
    const recipient = input__itemRecipient.value.trim();
    const header = input__itemHeader.value.trim();
    const text = inputText.value.trim();

    if (isEmpty(input__itemSender)) return;
    if (isEmpty(input__itemRecipient)) return;
    if (isEmpty(input__itemHeader)) return;
    if (isEmpty(inputText)) return;

    titlesPostcard__itemSender.textContent = "Отправитель: " + sender;
    titlesPostcard__itemRecipient.textContent = "Адресат: " + recipient;
    titlesPostcard__itemHeader.textContent = header;
    titlesPostcard__itemText.textContent = text;

    if (!$.querySelector('postcard_visible')) {
        postcard.classList.replace("postcard", "postcard_visible");
    }
})