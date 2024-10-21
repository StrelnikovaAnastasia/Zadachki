const $ = document;

const divForm = $.createElement("div");
const form = $.createElement("form");

const header = $.createElement("div");
const header__title = $.createElement("h3");
const header__nameP = $.createElement("p");
const br = $.createElement("br");
const ch1Value = $.createElement("input");
const btn = $.createElement("div");
const btn__buttonPl = $.createElement("button");
const btn__buttonMin = $.createElement("button");
const btn__buttonSt = $.createElement("button");
const btn__buttonUmn = $.createElement("button");
const btn__buttonDel = $.createElement("button");
const btn__buttonOst = $.createElement("button");
const ch2Value = $.createElement("input");
const equal = $.createElement("div");
const forOutput = $.createElement("output");


divForm.appendChild(form);
form.appendChild(header);
form.appendChild(ch1Value);
form.appendChild(btn);
form.appendChild(ch2Value);
form.appendChild(equal);
form.appendChild(forOutput);
header.appendChild(header__title);
equal.appendChild(header__nameP);
btn.appendChild(btn__buttonPl);
btn.appendChild(btn__buttonMin);
btn.appendChild(btn__buttonSt);
btn.appendChild(br);
btn.appendChild(btn__buttonUmn);
btn.appendChild(btn__buttonDel);
btn.appendChild(btn__buttonOst);

$.body.appendChild(divForm);


header__title.textContent = "Простые вычисления";
header__nameP.textContent = "=";
btn__buttonPl.textContent = "+";
btn__buttonMin.textContent = "-";
btn__buttonSt.textContent = "^";
btn__buttonUmn.textContent = "*";
btn__buttonDel.textContent = "/";
btn__buttonOst.textContent = "%";

divForm.id = "div_form";
form.id = "form";
ch1Value.id = "ch1Value";
ch1Value.type = "number";
ch1Value.classList.add("form-field")
ch2Value.id = "ch2Value";
ch2Value.type = "number";
ch2Value.classList.add("form-field")
forOutput.id = "forOutput";
forOutput.classList.add("form-field")
btn__buttonPl.id = "button";
btn__buttonMin.id = "button";
btn__buttonSt.id = "button";
btn__buttonUmn.id = "button";
btn__buttonDel.id = "button";
btn__buttonOst.id = "button";

$.addEventListener("submit", (e) => { e.preventDefault() });

function setConvertListener(btn, converter) {
    btn.addEventListener("click", () => {
        const ch1 = Number(ch1Value.value);
        const ch2 = Number(ch2Value.value);
        const res = converter(ch1, ch2);
        if (Number.isNaN(res) || !Number.isFinite(res)) {
            return forOutput.textContent = "Нет решения";
        }
        forOutput.value = res;
    });
};



setConvertListener(btn__buttonPl, (ch1, ch2) => ch1 + ch2);
setConvertListener(btn__buttonMin, (ch1, ch2) => ch1 - ch2);
setConvertListener(btn__buttonSt, (ch1, ch2) => ch1 ** ch2);
setConvertListener(btn__buttonUmn, (ch1, ch2) => ch1 * ch2);
setConvertListener(btn__buttonDel, (ch1, ch2) => ch1 / ch2);
setConvertListener(btn__buttonOst, (ch1, ch2) => ch1 % ch2);