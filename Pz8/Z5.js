var FirstClass = {
    children: [
        { name: "Ваня", age: 7 },
        { name: "Ира", age: 7 },
        { name: "Лиза", age: 6 },
        { name: "Андрей", age: 7 },
        { name: "Саша", age: 8 },
        { name: "Женя", age: 8 },
        { name: "Кеша", age: 6 },
        { name: "Леша", age: 6 }

    ],

    get property() {
        const compareFastAlf = (a, b) => (a.name).localeCompare(b.name);
        const compareFastVozr = (a, b) => a.age - b.age;
        this.children.sort(compareFastAlf);
        this.children.sort(compareFastVozr);
        return this.children;
    },

    set property({ name, age }) {
        let nameUp = name.toLowerCase();
        nameUp = nameUp[0].toUpperCase() + nameUp.slice(1);
        this.children.push({ name: nameUp, age: age });
    }
}

FirstClass.property = { name: "анаСтя", age: 8 };
FirstClass.property = { name: "анаСтя", age: 8 };
console.log(FirstClass.children);
console.log(FirstClass.property);