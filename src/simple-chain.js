const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    arr: [],
    getLength() {
        return this.arr.length;
    },
    addLink(value) {
        this.arr.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (
            typeof position !== "number" ||
            position < 1 ||
            position > this.arr.length
        ) {
            this.arr = [];
            throw new Error("You can't remove incorrect link!");
        }
        this.arr.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.arr.reverse();
        return this;
    },
    finishChain() {
        let arr0 = "";
        if (this.arr.length > 0) {
            arr0 = this.arr.join("~~");
        }
        this.arr = [];
        return arr0;
    },
};

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0));

module.exports = {
    chainMaker,
};
