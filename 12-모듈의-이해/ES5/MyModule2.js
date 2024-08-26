module.exports.name = "노드";
module.exports.property = { id: "nodejs", type: "javascript" };
module.exports.say = function () {
    console.log("Hello World");
};

module.exports.home = {
    postcode: "12345",
    address: "서울시 강남구 역삼동",
    getAddress: function () {
        console.log(this.postcode + ' ' + this.address);
    }
};