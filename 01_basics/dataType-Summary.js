const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345654578635383656537546n;

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name: "Aditya",
    age:21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof anotherId);

// stack(primitive), Heap(Non-Primitive)

let myYoutubename = "Aditya07.com"
let anothername = myYoutubename;
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "Aditya@google.com"

console.log(userOne.email);
console.log(userTwo.email);