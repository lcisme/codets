let age: number = 20;
let name2: string = "wtf";
console.log("object", name2);

let statsus: boolean = true;
console.log(statsus);
let check1: boolean = true;
let pro: boolean = Boolean("");
console.log("check pro: ", pro);

let proObject: object;
proObject = { name: "wtf", address: "wtf 2" };
console.log(proObject);

let proObject2: {
  name: string;
  address: string;
  phone: number;
} = {
  name: "wtfddcm",
  address: "23",
  phone: 3423423443,
};

let test: (string | number)[] = [
  "lecuong",
  "bruno fernandes",
  "cristiano messi",
];
test.push("leo ronaldo");
test.push(7);
console.log(test);
// tuple types
let testArray: [number, string, boolean] = [7, "ngu", true];
console.log(testArray);

enum OrderStatus {
  ON_THE_WAY = "on-the-way",
  DONE = "done",
}
console.log(OrderStatus.DONE);

const handleException = (errorMessage: string): never => {
  throw Error(errorMessage);
};

// const runInfinity = (): void => {
//   console.log("start running");
//   while (true) {
//     // console.log("loading...");
//   }
// };

// let a = runInfinity();
// console.log("check a >>> ", a);

// const sumNumber = (a: number | string, b:number | string) => {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   }
//   if (typeof a === "string" && typeof b === "string") {
//     return a.concat(b);
//   }
//   throw new Error("parameters must be numbers or strings")
// };

//  console.log("total: ", sumNumber('dcm ','wtf'));

type typeChoose = number | string | object | boolean;
const sumNumber = (a: typeChoose, b: number | string) => {
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

for (let i = 0; i < 10; i++) {
  console.log(">> i=", i);
}

// optional params du`ng ?

const sum5 = (x: number, y: number, z?: number) => {
  if (z) return x + y + z;
  return x + y;
};

console.log("sum 5: ", sum5(3, 5, 2), sum5(5, 3));

class Person {
  private id: number;
  private _name: string;
  private phone: string;

  constructor(id: number, _name: string, phone: string) {
    this.id = id;
    this._name = _name;
    this.phone = phone;
  }

  get name(){
    return this._name
  }

set name(name:string){
  this._name = name
}

  getFullname(): string {
    return `${this.id} ${this.name} call for me by ${this.phone}`
  }
}

let dcm = new Person(1,"le phu cuong","0966876014")
let checkName = dcm.name
dcm.name = "dumamay"
console.log(dcm);
console.log("name is ", dcm);
