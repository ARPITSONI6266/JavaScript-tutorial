const accountId = 1234
let accountEmail = "arpit@gmail.com"
var accPass = "12345"
accountCity = "jaipur"

//accountId = 2  // not allowed
/*
prefer not to use var
because of issue in block scope and functional scope
*/

let newvariable; //value = undefine

accountEmail = "soni@gmil.com"
accPass = "2323232"
accountCity = "Bengaluru"
console.log(accountId);

console.table([accountId, accountEmail, accPass, accountCity])