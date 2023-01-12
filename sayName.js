const sayName = () => {
    console.log("Hello World");
};

const sayAddress = () => {
    console.log("Street")

};

module.exports.sayName = sayName;
module.exports.sayAddress = sayAddress;