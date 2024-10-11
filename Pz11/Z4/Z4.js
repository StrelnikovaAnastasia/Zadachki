const $ = document;

const divform = $.createElement("div");
const form = $.createElement("form");

const header = $.createElement("header");
const h2 = $.createElement("h2");
const text = $.createElement("div");
const label_input = $.createElement("label");
const input = $.createElement("input");
const p = $.createElement("p");
const btn = $.createElement("div");
const label_btn_item_1 = $.createElement("label");
const btn_item_1 = $.createElement("button");
const label_btn_item_2 = $.createElement("label");
const btn_item_2 = $.createElement("button");
const label_btn_item_3 = $.createElement("label");
const btn_item_3 = $.createElement("button");
const label_btn_item_4 = $.createElement("label");
const btn_item_4 = $.createElement("button");
const label_btn_item_5 = $.createElement("label");
const btn_item_5 = $.createElement("button");
const label_btn_item_6 = $.createElement("label");
const btn_item_6 = $.createElement("button");
const label_btn_item_7 = $.createElement("label");
const btn_item_7 = $.createElement("button");
const label_btn_item_8 = $.createElement("label");
const btn_item_8 = $.createElement("button");

divform.appendChild(form);
form.appendChild(header);
form.appendChild(text);
form.appendChild(label_input);
form.appendChild(p);
form.appendChild(btn);
header.appendChild(h2);
label_input.appendChild(input);
btn.appendChild(label_btn_item_1);
btn.appendChild(label_btn_item_2);
btn.appendChild(label_btn_item_3);
btn.appendChild(label_btn_item_4);
btn.appendChild(label_btn_item_5);
btn.appendChild(label_btn_item_6);
btn.appendChild(label_btn_item_7);
btn.appendChild(label_btn_item_8);
label_btn_item_1.appendChild(btn_item_1);
label_btn_item_2.appendChild(btn_item_2);
label_btn_item_3.appendChild(btn_item_3);
label_btn_item_4.appendChild(btn_item_4);
label_btn_item_5.appendChild(btn_item_5);
label_btn_item_6.appendChild(btn_item_6);
label_btn_item_7.appendChild(btn_item_7);
label_btn_item_8.appendChild(btn_item_8);

$.body.appendChild(divform);

h2.textContent = "Список языков";
text.textContent = "Перечислите языки, которыми вы владеете";
btn_item_1.textContent = "JavaScript";
btn_item_2.textContent = "C++";
btn_item_3.textContent = "Java";
btn_item_4.textContent = "Python";
btn_item_5.textContent = "PHP";
btn_item_6.textContent = "Ruby";
btn_item_7.textContent = "Assembler";
btn_item_8.textContent = "C#";

divform.id = "div_form";
form.id = "form";
header.classList.add("header");
text.classList.add("text");
input.classList.add("input");
btn.classList.add("btn");
btn_item_1.classList.add("btn__item", "btn-false");
btn_item_1.id = "button_1";
btn_item_2.classList.add("btn__item", "btn-false");
btn_item_2.id = "button_2";
btn_item_3.classList.add("btn__item", "btn-false");
btn_item_3.id = "button_3";
btn_item_4.classList.add("btn__item", "btn-false");
btn_item_4.id = "button_4";
btn_item_5.classList.add("btn__item", "btn-false");
btn_item_5.id = "button_5";
btn_item_6.classList.add("btn__item", "btn-false");
btn_item_6.id = "button_6";
btn_item_7.classList.add("btn__item", "btn-false");
btn_item_7.id = "button_7";
btn_item_8.classList.add("btn__item", "btn-false");
btn_item_8.id = "button_8";

input.disabled = true;

$.addEventListener("submit", (e) => { e.preventDefault() });

function setConvertListener(btn) {
    btn.addEventListener("click", () => {
        let languages = input.value;
        let lang = btn.textContent;
        if (btn.classList.contains("btn-false")) {
            btn.classList.replace("btn-false", "btn-true");
            if (languages) {
                input.value += ", " + lang;
            }
            else {
                input.value += lang;
            };
        }
        else {
            btn.classList.replace("btn-true", "btn-false");
            let arr = languages.split(", ");
            arr = arr.filter(item => item != lang);
            input.value = arr.join(", ");
        };
    })
};

let arr_btn = [btn_item_1, btn_item_2, btn_item_3, btn_item_4,
    btn_item_5, btn_item_6, btn_item_7, btn_item_8];
arr_btn.forEach(item => {
    setConvertListener(item);
});