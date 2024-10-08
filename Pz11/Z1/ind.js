const $ = document;

const divForm = $.createElement("div");
const form = $.createElement("form");

const text_name1 = $.createElement("div");
const title = $.createElement("h3");
const nameR = $.createElement("p");
const br = $.createElement("br");
const for_input1 = $.createElement("input");
const btn = $.createElement("div");
const button_pl = $.createElement("button");
const button_min = $.createElement("button");
const button_st = $.createElement("button");
const button_umn = $.createElement("button");
const button_del = $.createElement("button");
const button_ost = $.createElement("button");
const for_input2 = $.createElement("input");
const text_name2 = $.createElement("div");
const for_output = $.createElement("output");


divForm.appendChild(form);
form.appendChild(text_name1);
form.appendChild(for_input1);
form.appendChild(btn);
form.appendChild(for_input2);
form.appendChild(text_name2);
form.appendChild(for_output);
text_name1.appendChild(title);
text_name2.appendChild(nameR);
btn.appendChild(button_pl);
btn.appendChild(button_min);
btn.appendChild(button_st);
btn.appendChild(br);
btn.appendChild(button_umn);
btn.appendChild(button_del);
btn.appendChild(button_ost);

$.body.appendChild(divForm);


title.textContent = "Простые вычисления";
nameR.textContent = "=";
button_pl.textContent = "+";
button_min.textContent = "-";
button_st.textContent = "^";
button_umn.textContent = "*";
button_del.textContent = "/";
button_ost.textContent = "%";

divForm.id = "div_form";
form.id = "form";
for_input1.id = "for_input1";
for_input1.classList.add("form-field")
for_input2.id = "for_input2";
for_input2.classList.add("form-field")
for_output.id = "for_output";
for_output.classList.add("form-field")
button_pl.id = "button";
button_min.id = "button";
button_st.id = "button";
button_umn.id = "button";
button_del.id = "button";
button_ost.id = "button";

$.addEventListener("submit", (e) => { e.preventDefault() });

function setConvertListener(btn, converter) {
    btn.addEventListener("click", () => {
        const ch1 = Number(for_input1.value);
        const ch2 = Number(for_input2.value);
        for_output.value = converter(ch1, ch2);       
    });
};

setConvertListener(button_pl, (ch1, ch2) => ch1 + ch2);
setConvertListener(button_min, (ch1, ch2) => ch1 - ch2);
setConvertListener(button_st, (ch1, ch2) => ch1 ** ch2);
setConvertListener(button_umn, (ch1, ch2) => ch1 * ch2);
setConvertListener(button_del, (ch1, ch2) => ch1 / ch2);
setConvertListener(button_ost, (ch1, ch2) => ch1 % ch2);