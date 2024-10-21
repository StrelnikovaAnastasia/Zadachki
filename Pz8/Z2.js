const oneNum = (number => {
    if (number.length == 1 && Number(number) > 0 && Number(number) <= 9) {
        number = "0" + number;
    }
    return number;
});
var HappyBirthday = {
    hDays: [
        { name: "Dave", month: "09", day: "04" },
        { name: "Ann", month: "02", day: "27" },
        { name: "Nik", month: "08", day: "15" },
        { name: "Pul", month: "02", day: "18" },
        { name: "Steven", month: "07", day: "24" },
        { name: "Frank", month: "02", day: "13" },
    ],
    get property() {
        let names = [];
        this.hDays.forEach((item) => {
            names.push(item.name);
        })
        return str = names.join(',');
    },

    set property({ name, day }) {
        let monthDay = day.split("/");

        let nameUp = name.toLowerCase();
        nameUp = nameUp[0].toUpperCase() + nameUp.slice(1);

        let dayNorm = String(monthDay[1]);
        let monthNorm = String(monthDay[0]);

        dayNorm = oneNum(dayNorm);
        monthNorm = oneNum(monthNorm);

        if (Number(dayNorm) > 31 || Number(monthNorm) > 12 || Number(dayNorm) <= 0 || Number(monthNorm) <= 0) {
            console.log("Дата введена некорректно, данные не внесены");
            return;
        }
        const obj = { name: nameUp, month: monthNorm, day: dayNorm };
        this.hDays.push(obj);
    },

    showDataOnMonth: function (month) {
        month = oneNum(month);
        this.hDays.forEach((item) => {
            if (item.month == month) {
                console.log(item.name);
            }
        })
    }
}

console.log(HappyBirthday.property);
HappyBirthday.property = { name: "nAsTyA", day: "1/12" };
console.log(HappyBirthday.hDays);
HappyBirthday.showDataOnMonth('2');
