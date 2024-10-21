var FirstClass = {
    isSort: false,
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
        if (this.isSort) {
            return this.children;
        }

        const compare = (a, b) => {
            const first = a.age - b.age;
            if (first == 0) {
                return (a.name).localeCompare(b.name);
            }
            return first;
        }
        this.isSort = true;
        this.children.sort(compare);
        return this.children;
    },

    set property({ name, age }) {
        this.isSort = false;
        let nameUp = name.toLowerCase();
        nameUp = nameUp[0].toUpperCase() + nameUp.slice(1);
        this.children.push({ name: nameUp, age: age });
    }
}

FirstClass.property = { name: "анаСтя", age: 8 };
FirstClass.property = { name: "анаСтя", age: 6 };
console.log(FirstClass.children);
console.log(FirstClass.property);