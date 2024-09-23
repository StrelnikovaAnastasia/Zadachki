var Target = {
    shows: [
        ["Дейв", "машины"],
        ["Анна", "цветы"],
    ],

    targetWork: function ([name, interest]) {
        console.log("Привет, ", name, ", мы знаем, что в круг ваших увлечений входит ",
            interest, ". Присоединяйтесь к TheBestCompany! С нами уже: \n");
        this.shows.forEach((item, index) => {
            console.log(index + 1, ") ", item[0], ", который(ая) любит ", item[1]);
        });
        this.shows.push([name, interest]);
    }
}

Target.targetWork(["Nastya", "books"]);