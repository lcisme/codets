var age = 20;
var name2 = "wtf";
console.log("object", name2);
var statsus = true;
console.log(statsus);
var check1 = true;
var pro = Boolean("");
console.log("check pro: ", pro);
var proObject;
proObject = { name: "wtf", address: "wtf 2" };
console.log(proObject);
var proObject2 = {
    name: "wtfddcm",
    address: "23",
    phone: 3423423443
};
var test = [
    "lecuong",
    "bruno fernandes",
    "cristiano messi",
];
test.push("leo ronaldo");
test.push(7);
console.log(test);
// tuple types
var testArray = [7, "ngu", true];
console.log(testArray);
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["ON_THE_WAY"] = "on-the-way";
    OrderStatus["DONE"] = "done";
})(OrderStatus || (OrderStatus = {}));
console.log(OrderStatus.DONE);
var handleException = function (errorMessage) {
    throw Error(errorMessage);
};
var sumNumber = function (a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("parameters must be numbers or strings");
};
console.log("total: ", sumNumber("dcm ", "'sing sang song '"));
// const agePerson: number = 20;
// switch (age) {
//   case 21:
//   case 20:
//     console.log("tuoi 20");
//     break;
//   case 12:
//     console.log("tuoi 12");
//   default:
//     console.log("bAN DA CHET");
// }
for (var i = 0; i < 10; i++) {
    console.log(">> i=", i);
}
// optional params du`ng ?
var sum5 = function (x, y, z) {
    if (z)
        return x + y + z;
    return x + y;
};
console.log("sum 5: ", sum5(3, 5, 2), sum5(5, 3));
var Person = /** @class */ (function () {
    function Person(id, _name, phone) {
        this.id = id;
        this._name = _name;
        this.phone = phone;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getFullname = function () {
        return "".concat(this.id, " ").concat(this.name, " call for me by ").concat(this.phone);
    };
    return Person;
}());
var dcm = new Person(1, "le phu cuong", "0966876014");
var checkName = dcm.name;
dcm.name = "dumamay";
console.log(dcm);
console.log("name is ", dcm);
