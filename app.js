//....... . . sum of two interger . . ....... //

// let a = 1;
// let b = 17;
// console.log(a+b);

// string + string = string (concatenation)

// let s = "hello";
// let y = "world";
// console.log(typeof(s+y))

// stirng + int = string(concatination)

// let u = "hello";
// let h = "10";
// console.log(typeof(u+h))

// int + int = int (arthematic)

// let r = 20
// let g = 40
// console.log(typeof(r+g))

//................ Type coercion ..............//

// operator ko dkehke type define karna //
// console.log(5 * "2") = 10  //
// console.log(5 + "2") = 52 //
// console.log(4 - "2") = 2 //

//  accept and print answer //

// let age = Number(prompt("enter a age"))
// console.log(age)

// swap two variable via 3 methods //

// # 1
// let a = 10;
// let b = 20;

// let tem = a;

// a = b ;
// b = tem;

// console.log(a , b)

// yaha ek extra container use hua ha //

// # 2

//  let a = 10;
//  let b = 20 ;

//  a = a + b ;
//  b = a - b ;
//  a = a - b ;

//  console.log(a , b)

// ye normal hai //

// # 3

// let a = 10;
// let b = 20;

// [a , b] = [b , a]

// console.log(a , b);

// ye normal hai //

//..............Pre/Post.................//
//.........  icretement / decrement + - ..........//
// #1

//   let a = 20 ;
//   console.log(a++ + ++a)

// .....................done......................./

//.............................Mastering Math functions ...........................//

// console.log(Math.ceil(10.1)) // ye na point value ko convert karta ha normal value me " but in upper range "//
// console.log(Math.floor(10.5)) // ye bhi point value ko convert karta ha normal value me " but in lower range "//
// console.log(Math.round(10.5)) // ye inn dono ka shortcut ha ".5 se niche yani 10", "point .5 se uper yani 11" //
// console.log(Math.abs(-9)) // ye  negative value ko positive me convert karta ha //
// console.log(Math.trunc(10.45678)) // point me jo number ha wo remove karta ha //
// console.log(Math.pow(5 ,2)) // basically power nikalega jese iskki ha 25 //
// console.log(Math.sqrt(36)) // kisi bhi number ka square root nikalega //
// console.log(Math.cbrt(27)) // iska cuberoot nikalega //
// console.log(Math.max(10,67,78,98,99,100)) //maxium valye "number" written karega //
// console.log(Math.min(10, 4, 6, 8)) // minimum value written kargea ye //
// console.log(Math.random()) // koi bhi random digit written karega //

// let a= 234.567876567
// console.log(a.toFixed(0)) // point ke baad koi bhi random ya fixed digits written karega //

// # Question 1> calculate compund interest ........//

// # queation 2 > generate opt //
//  console.log(Math.floor(Math.random()*9000 + 1000)) // abb isme aa rahi ha random digits //

//..............done..............//

//........conditional statements.......//

// #3

//  let year = Number(prompt("enter a year"))
//  let isLeap = false;

//   if(year % 4 == 0){   // agar 4 se jara ha to leap ha //
//        if(year % 100==0){  // aur 100 se nhi jara //
//   if(year % 400 == 0) isLeap = true
//        }else{
//          isLeap = true // to wo leap year ha // agar wo 4 se % ho skta ha toh //
//        }
//   } else isLeap = false  // intereting baat ye 400 saal me ek baar ata hai tab hi wo leap year khelaata hai //
//   console.log(isLeap? "leap year":"not a leap year");

//.................done................//

// #4 aajii discount calculate karna hai jii ...

//       Amount       Discount

//        0 - 500      = 0%

//        50001 - 7000 = 5%

//        7001 - 9000  = 10%

//      more than 9000 = 200%

// to calulate karna ha actually me pay kitna karna haii //

// let amount = (prompt("enter a amount"))

// if (amount >= 0 && amount <= 5000) {
//    console.log(amount)
// } else if (amount > 5000 && amount <= 7000) {
//    console.log(amount - (5 * amount) / 100); // yaha formula ha //
// }
// else if (amount > 5000 && amount <= 9000) {
//    console.log(amount - (10 * amount) / 100);
// }
// else if (amount > 9000) {
//    console.log(amount - (20 * amount) / 100);

// } else {
//    console.log("invalid input")
// }

///............  ye ha chutiya tarika ...............//

// let amount = Number(prompt("enter a number"))

// let dis = 0;

// if (amount>=0 && amount<=5000) dis = 0;
// else if (amount >5000 && amount<= 7000) dis = 5
// else if (amount >7000 && amount<= 9000) dis = 10
// else if (amount >9000) dis = 20
// else console.log("invalid input")

// console.log(amount - (dis*amount)/100)

//............................ye sexmy appraoch .........................//

//........................... done ........................//

// #5  bijli bill calculate karna hai jiii......

// unit              price //

// upto 1oo         rs 4.2/unit
// 101-200          rs 6/unit
// 201-400          rs 8/unit
// more than 400    rs 13/unit

// let unit = Number(prompt('Enter a unit'))

// let amount = 0
// if (amount>=0 && unit<=100) {
//         amount = unit*4.2;
// }else if (unit> 100 && unit <=200){
//         amount = (100 * 4.2) + (unit-100)*6
// }else if (unit> 200 && unit <=400){
//         amount = (100 * 4.2) + (100*6) + (unit-200)*8
// }else if (unit> 400){
//         amount = (100 * 4.2) + (100*6) + (200)*8 (unit-400) * 13
// }
// console.log(amount);

//.......... ye ha chumtiya tarikaaa........//

// let unit = Number(prompt('Enter a unit'))

// let amount = 0;

// if (unit>400){
//         amount = (unit - 400) * 13
//         unit = 400
// } if (unit>200 && unit <=400){
//         amount = amount + (unit-200) *8
//         unit = 200;
// }if (unit>100 && unit <=200){
//         amount = amount + (unit-100) *6
//         unit = 100;
// }

//    amount = amount + unit *4.2

// console.log(amount);

//...............ye hai tagda tarikaa .............//

// # 6 LOOPS...........//

// for(let i = 1; i<=50; i++){
//     console.log("hello");
//  }

// #example........ //

// # 7> print heluu n number of times ...//

// let n = (prompt("enter a number"))

// let i ;
// for(let i = 1; i<=n; i++){
//         console.log("heluu");

// }
// console.log("fail at "+ i)  // ye log  fail hoga

// # 8 print natural number upto n //

// let n = Number(prompt("enter a number"))

// for(let i =n; i>=1; i--){
//         console.log(i);

// }

// #9 reverse for loop . print n to 1 //

// let n = Number(prompt("enter a number"))

// for (let i=1; i<=10 ; i++){
//         console.log(n + "*" + i + "=" + (n*i));

// }

// # 10 sum up to n terms ..//

// let n = Number(prompt("enter a number"))
// let sum = 0;
// for (let i=1; i<=n; i++){
//         sum = sum + i

// }
//  console.log(sum);

// # 11  factorial of a number ..//

// #12 break and continue

// let n = 10;

// for(let i =1; i<=n; i++){
//  if( i == 4) continue //break, continue kar skte ha yaha kuch bhi number deke under 10 ..//
// console.log(i);

// }

// #13 while

// let n = 5
// let i = 1

// while (i <= n) {
//         console.log("Haaha!");
//         i++;
// }

// #14 sum of digit //

// let n = Number(prompt("Enter a number"))

// let sum = 0;
// while(n>0){
// let rem = n%10
// sum = sum + rem;
// n = Math.floor(n/10)
// }

// console.log(sum)

// #15 reverse of number

// let n = Number(prompt("enter a number"))

// let rev = 0;
// while (n>0){
//    let rem = n%10
//    rev = (rev * 10) + rem
//    n = Math.floor(n/10)
// }
// console.log(rev)

// # 16 storng numbers (hold)

// ....   #17 automorphic numbers  ....//

// automorphic means like ex = 25 and iska square ha 625 to iske end me ana chiye 25 to ye automorphic number haii ...//

//  automorphic means like ex = 7 ka square ha 49 to iske last me 7 nhi ha to ye ha non-authomorphic number ...//

// # switch case reh gya ha ..///

//# 17__ do while __ ...//

// let userInput;

// do {
//     console.log("helluu duniya");
//     userInput = prompt("do you want to continue yes/no".toLowerCase())
// }while (
//     userInput === 'yes'
// );

// # 18 guess the number ....//

//# 19 sasta calculator ....//
// let userInput;
// do {
//     let num1 = Number(prompt("enter first number"))
//     let num2 = Number(prompt("enter second number"))
//     let operator = prompt("enter valid operator(+,-,*,/)")

//     switch (operator) {
//         case '+':
//             console.log('result' + (num1 + num2));
//             break;
//         case '-':
//             console.log('result' + (num1 - num2));
//             break;
//         case '*':
//             console.log('result' + (num1 * num2));
//             break;
//         case '/':
//             if (num2 !== 0)
//                 console.log("result" + (num1 * num2));
//             else console.log("please enter a valid number");
//             break;

//         default:
//             console.log("please enter a valid operator");
//     }
//     userInput = prompt("kya app dubara chalana hai yes/no").toLowerCase()

// } while (userInput === 'yes');

//.........................................................//

//........................nested looping....................//

// # pattern..................//

// *****
// *****
// *****
// *****
// *****

// for (let i = 1; i <= 5; i++) {
//   for (let k = 1; k <= 5; k++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

//............. Q ..............//

// *
// **
// ***
// ****
// *****

// const prompt = require("prompt-sync")()
// let n = prompt("enter a number")
//  for (let i = 1; i<=n; i++){
// for (let k = 1; k<=i; k++){
//     process.stdout.write("*")
// }
// console.log()
// }

//1      a
//12     ab
//123    abc
//1234   abcd
//12345  abcde

//.............numbers.............//
// const prompt = require("prompt-sync")()
// let n = prompt("enter a number")
//  for (let i = 1; i<=n; i++){
// for (let k = 0; k<=i; k++){
//     process.stdout.write(k+"")
// }
// console.log()
// }

//.............letters.............//
// const prompt = require("prompt-sync")()
// let n = prompt("enter a number")
//  for (let i = 1; i<=n; i++){
// for (let k = 0; k<=i; k++){
//     process.stdout.write(String.fromCharCode(65+k))
// }
// console.log()
// }

//........inverted right angle triangle.......//

// *****
// ****
// ***
// **
// *

// const prompt = require("prompt-sync")()
// let n = prompt("enter a number")
// let temp = 5;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=temp; j++){
// process.stdout.write("*")
//     }
//     temp --
// console.log()
// }

// short

// const prompt = require("prompt-sync")()
// let n = Number(prompt("enter number "))

// for (let i = 1; i <= n; i++) {
//     console.log("*".repeat(i))
// }

//..................mirror right angle triangle  ...................//

//         *
//        **
//       ***
//      ****
//     *****

// const prompt = require("prompt-sync")()
// let n = Number(prompt("enter number "))

// for (let i = 1; i <= n; i++) {

//     // spaces
//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write(" ")
//     }

//     // stars
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*")
//     }

//     console.log()
// }

// short

// const prompt = require("prompt-sync")()
// let n = Number(prompt("enter number "))

// for (let i = 1; i <= n; i++) {
// console.log(" ".repeat(n - i) + "*".repeat(i))
// }

//............. Triangle .............//

// const prompt = require("prompt-sync")()
// let n = (prompt("enter a number"))

// for (let i= 1; i <=n;  i++){
//     for(let j= 1; j <= n - i; j++ ){
//         process.stdout.write(" ")
//     }
//  for (let j= 1; j <=i;  j++){
//     process.stdout.write("* ")
//  }
// console.log();

// }

// short

// const prompt = require("prompt-sync")()
// let n = Number(prompt("enter a number"))

// for (let i = 1; i <= n; i++) {
//     console.log(" ".repeat(n - i) + "* ".repeat(i))
// }



// . . . . .
// . . . . .
// . . . . . // x bana rhe hai .....//
// . . . . .
// . . . . .


// let prompt = require("prompt-sync")()
// let n = Number(prompt("enter number"))
// for (let i= 1; i<= n; i++){
// for (let j= 1; j<= n; j++){
//     if (i==j || i+j === n+1){
//         process.stdout.write("* ")
//     }else process.stdout.write("  ")
// }
//     console.log();

// }


//................  ...............//


// . . . . .
// . . . . .
// . . . . . // v bana rhe hai .....//
// . . . . .
// . . . . .


// let prompt = require("prompt-sync")()
// let n = Number(prompt("enter a number"))
// for (let i = 1; i<=n; i++){
//     for (let j = 1; j<= (n*2)-1; j++){
//         if ( i==j || i+j === n*2 ){
//             process.stdout.write("* ")
//         }else process.stdout.write("  ")
//     }
//     console.log()
// }



