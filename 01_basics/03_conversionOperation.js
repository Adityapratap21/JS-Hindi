let score = 33
console.log(typeof "Aditya")
console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof score)
console.log(typeof (score))

let point = "33"
let valueInNumber = Number(point)

console.log(typeof point)
console.log(typeof valueInNumber)

let p = "33abc"
let b = Number(p);
console.log(typeof p)
console.log(typeof b)
console.log(b)

let a = null;
let c = Number(a);
console.log(typeof a)
console.log(typeof c)
console.log(c)

let isLoggedIn = "AD"//"";//1 ;
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)

let str1 = "Hello"
let str2 = " Aditya"

let str3 = str1 + str2

console.log(str3);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" +2 +2);
console.log(1 + 2 + "2");
console.log(true);
console.log(+true);
console.log(+"");

let gameCounter = 100
gameCounter++
console.log(gameCounter);


// "33"=>33
//"33abc" =>Nan
//true =>1; false =>0