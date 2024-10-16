const $ = document;

const divform = $.createElement("div");
const form = $.createElement("form");

const header = $.createElement("header");
const h2 = $.createElement("h2");
const text = $.createElement("div");
const labelInput = $.createElement("label");
const input = $.createElement("input");
const p = $.createElement("p");
const btn = $.createElement("div");
const labelBtn1 = $.createElement("label");
const btn__item1 = $.createElement("button");
const labelBtn2 = $.createElement("label");
const btn__item2 = $.createElement("button");
const labelBtn3 = $.createElement("label");
const btn__item3 = $.createElement("button");
const labelBtn4 = $.createElement("label");
const btn__item4 = $.createElement("button");
const labelBtn5 = $.createElement("label");
const btn__item5 = $.createElement("button");
const labelBtn6 = $.createElement("label");
const btn__item6 = $.createElement("button");
const labelBtn7 = $.createElement("label");
const btn__item7 = $.createElement("button");
const labelBtn8 = $.createElement("label");
const btn__item8 = $.createElement("button");

divform.appendChild(form);
form.appendChild(header);
form.appendChild(text);
form.appendChild(labelInput);
form.appendChild(p);
form.appendChild(btn);
header.appendChild(h2);
labelInput.appendChild(input);
btn.appendChild(labelBtn1);
btn.appendChild(labelBtn2);
btn.appendChild(labelBtn3);
btn.appendChild(labelBtn4);
btn.appendChild(labelBtn5);
btn.appendChild(labelBtn6);
btn.appendChild(labelBtn7);
btn.appendChild(labelBtn8);
labelBtn1.appendChild(btn__item1);
labelBtn2.appendChild(btn__item2);
labelBtn3.appendChild(btn__item3);
labelBtn4.appendChild(btn__item4);
labelBtn5.appendChild(btn__item5);
labelBtn6.appendChild(btn__item6);
labelBtn7.appendChild(btn__item7);
labelBtn8.appendChild(btn__item8);

$.body.appendChild(divform);

h2.textContent = "Список языков";
text.textContent = "Перечислите языки, которыми вы владеете";
btn__item1.textContent = "JavaScript";
btn__item2.textContent = "C++";
btn__item3.textContent = "Java";
btn__item4.textContent = "Python";
btn__item5.textContent = "PHP";
btn__item6.textContent = "Ruby";
btn__item7.textContent = "Assembler";
btn__item8.textContent = "C#";

divform.id = "div_form";
form.id = "form";
header.classList.add("header");
h2.classList.add("h2");
text.classList.add("text");
input.classList.add("input");
btn.classList.add("btn");
btn__item1.classList.add("btn__item", "btn-false");
btn__item1.id = "button_1";
btn__item2.classList.add("btn__item", "btn-false");
btn__item2.id = "button_2";
btn__item3.classList.add("btn__item", "btn-false");
btn__item3.id = "button_3";
btn__item4.classList.add("btn__item", "btn-false");
btn__item4.id = "button_4";
btn__item5.classList.add("btn__item", "btn-false");
btn__item5.id = "button_5";
btn__item6.classList.add("btn__item", "btn-false");
btn__item6.id = "button_6";
btn__item7.classList.add("btn__item", "btn-false");
btn__item7.id = "button_7";
btn__item8.classList.add("btn__item", "btn-false");
btn__item8.id = "button_8";

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

let arr_btn = [btn__item1, btn__item2, btn__item3, btn__item4,
    btn__item5, btn__item6, btn__item7, btn__item8];
arr_btn.forEach(item => {
    setConvertListener(item);
});