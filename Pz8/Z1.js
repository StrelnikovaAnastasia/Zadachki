Queue = {
    commands: [
        { id: "1-command", command: "go" },
        { id: "2-command", command: "rotate" },
        { id: "3-command", command: "push" },
        { id: "4-command", command: "pop" },
        { id: "5-command", command: "reverse" }
    ],
    get property() {
        let el1 = this.commands.shift().command;
        this.commands.forEach((item, index) => {
            item.id = String((index + 1) + '-command');
        })
        return el1;
    },

    set property(command) {
        const obj = {
            id: String((this.commands.length + 1)
                + "-command"), command: command
        }
        this.commands.push(obj);
    },

    showQueue: function () {
        const str = "abcdefghijklmnopqrstuvwxyz"
        this.commands.forEach((item, index) => {
            console.log(str[index], ". ", item.command);
        })

    }

}

console.log(Queue.property);
Queue.property = "shift";
console.log(Queue.commands);
Queue.showQueue();