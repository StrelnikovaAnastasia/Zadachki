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
        });
        return str = names.join(',');
    },

    set property({ name, day }) {
        let monthDay = day.split("/");

        let nameUp = name.toLowerCase();
        nameUp = nameUp[0].toUpperCase() + nameUp.slice(1);

        let dayNorm = String(monthDay[1]);
        let monthNorm = String(monthDay[0]);
        if (dayNorm.length == 1 && Number(dayNorm) > 0 && Number(dayNorm) <= 9) {
            dayNorm = "0" + dayNorm;
        }
        if (monthNorm.length == 1 && Number(monthNorm) > 0 && Number(monthNorm) <= 9) {
            monthNorm = "0" + monthNorm;
        }

        if (Number(dayNorm) > 31 || Number(monthNorm) > 12 || Number(dayNorm) <= 0 || Number(monthNorm) <= 0) {
            console.log("Дата введена некорректно, данные не внесены");
            return;
        }
        const obj = { name: nameUp, month: monthNorm, day: dayNorm };
        this.hDays.push(obj);
    },

    showDataOnMonth: function (month) {
        if (month.length == 1 && Number(month) > 0 && Number(month) <= 9) {
            month = "0" + month;
        }
        this.hDays.forEach((item) => {
            if (item.month == month) {
                console.log(item.name);
            }
        })
    }
}

console.log(HappyBirthday.property);
HappyBirthday.property = { name: "nAsTyA", day: "01/12" };
console.log(HappyBirthday.hDays);
HappyBirthday.showDataOnMonth('2');
