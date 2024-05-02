const accountId = 144553
let accountEmail = "adityapratap41840@gmail.com"
var accountPassword = "12345"
accountCity ="Bihar"
let accountState;

//acountId = 2 //not allowed

accountEmail = "hatd@.com"
accountPassword = "2433525765"
accountCity = "Kolkata"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])