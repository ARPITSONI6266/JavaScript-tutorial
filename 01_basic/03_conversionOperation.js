let score = "33"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)// remember datatype always in capital for conversion

console.log(typeof valueInNumber)
console.log(valueInNumber)
/* 
33 => number => 33
"33" => number => 33
"33abc" => number => NaN
null => number => 0
undefined => number => NaN
true => number => 1
"string" => number => NaN
*/

let isloggedIn = ""
let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn)

/*
1 => true and  0=> false
"" => false and "arpit" => true
*/
// -----------------------------
// operators
// + - \ * %
// "1"+2 => 12
// "0"+"2"= 02
// 1+2+"2" => 32
// preIncreament ++a
// postIncreament a++