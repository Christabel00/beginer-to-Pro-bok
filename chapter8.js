// //Introduction to built-in javascript methods
// let s= "Hello ";
// console.log(
//     s.concat("there!")
//     .toUpperCase()
//     .replace("THERE" ,"you! ")
//     .concat("You are amazing")
// );

// //Global methods
// let x=7;
// alert(isNaN(x));

// //Decoding and encoding RUIs
// let uri= "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri= encodeURI(uri);
// console.log("Encoded: " + encoded_uri);

// let decoded_uri = decodeURI(encoded_uri);
// alert(decoded_uri);

// //decodeUriComponent() and encodeUriComponent()
// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);


// //Practice exercise 8.1
// const secretMes1 = "How's%20it%20going%3F"; 
// const secretMes2 = "How's it going?";
// const decodedComp = decodeURIComponent(secretMes1);
// console.log(decodedComp);
// const encodedComp = encodeURIComponent(secretMes2);
// console.log(encodedComp);
// const uri = "http://www.basescripts.com?=Hello World";
// const encoded = encodeURI(uri);
// console.log(encoded);

// //Parsing numbers
// //Making integers with parseInt()
// let str_int ="6";
// let int_int = parseInt(str_int);
// alert("Type of " + int_int + "is " + typeof int_int);

// let str_float ="7.6";
// let int_float = prseInt(str_float);
// alert("Type of " + int_float + "is " + typeof int_float);

// //Array methods
// let arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element, index) {
//  alert("Printing stuff:"+ element+ "on array position:"+ index);
// }
// arr.forEach(printStuff);

// //filtering an array
// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
//  return typeof element === "number";
// }
// let filterArr = arr.filter(checkString);
// alert(filterArr);

// //Checking a condition for all elements
// alert(arr.every(checkString));

// //Replacing part of an array with another part of the array
// arr = ["grapefruit" , 4 , "hello" , 5.6 , true];
// arr.copyWithin(0,3,4);
// alert(arr);

// //Mapping the values of an array.
// let arr = [1, 2, 3, 4];
// let mapped_arr = arr.map(x => x + 1);
// console.log(mapped_arr);

// //Finding the last occurance in an array
// let bb =["so " ,"bye", "love"];
// alert(bb.lastIndexOf("bye"));

// //String methods
// let s1 ="Hello ";
// let s2="javascript";
// let result = s1.concat(s2);
// alert(result);

// //Converting a string to an array
// let result= "Hello Javascript";
// let arr_result = result.split(" ");
// console.log(arr_result);

// //Converting an array to a string
// let letters =["a" ,"b","c"];
// let x= letters.join();
// console.log(x);

// //Working with index and positions
// let poem ="Roses are red , violets are blue, if I do js , the you an too!"
// let index_re = poem.indexOf("R")
// alert(index_re);

// //Using a search method
// let searchStr= "When i see my fellow i say hello";
// let pos= searchStr.search("lo");
// alert(pos);

// //LastIndexOf method
// let poem ="Roses are red , violets are blue, if I do js , the you an too!"
// let lastIndex_re=poem.lastIndexOf("re");
// alert(lastIndex_re);

// //CharAt(index) method
// let pos1 = poem.charAt(10);
// alert(pos1);

// let pos2 =poem.charAt(1000);
// alert(pos2);

// //Creating substrings
// let str= "Create a substring";
// let substr1 = str.slice(5);
// let substr2= str.slice(0,3);
// alert("1:" + substr1);
// alert("2" + substr2);

// //Replacing parts of the string
// let hi ="Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// alert(new_hi);

// let new_hi2 = hi.replace("not there", "never there");
// alert(new_hi2);

// let s3 ="hello hello";
// let new_s3 = s3.replace("hello" , "oh");
// alert(new_s3);


// let new_s3 = s3.replaceAll("hello", "oh");
// console.log(new_s3);

// //Uppercase and lowercase
// let low_bye ="bye!";
// let up_bye = low_bye.toUpperCase();
// alert(up_bye);

// let caps ="HI HOW ARE YOU?"
// let fixed_caps = caps.toLowerCase();
// alert(fixed_caps);

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
// alert(first_capital);

// //The start and end of a string
// let encouragement ="You are doing great , keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// alert(bool_start);

// //practice exercise 8.4
// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
// alert(first_capital);

// //Prcatice exercise 8.5
// let val = "I love JavaScript";
// val = val.toLowerCase();
// let vowels = ["a","e","i","o","u"];
// vowels.forEach((letter,index) =>{
//  console.log(letter);
//  val = val.replaceAll(letter,index);
// });
// console.log(val);

// //Number methods
// //Checking if something is (not) a number
// let x= 34;
// alert(isNaN(x)); //This will be false
// alert(!isNaN(x));//This will be true

// let str1 ="5";
// alert(isNaN(str1));

// //Checking if something is infinite
// let x =3;
// let str= "finite";
// alert(isFinite(x));
// alert(isFinite(Infinity));
// alert(isFinite(10/0));

// //Checking if something is an integer
// let x = 3;
// let str = "integer";
// console.log(Number.isInteger(x));
// console.log(Number.isInteger(str));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(2.4));

// //Specifying a number of decimals
// let x= 1.23456;
// let newX = x.toFixed(3);
// console.log(x, newX);

// //Specifying precision
// let x = 1.23456;
// let newX = x.toPrecision(2);//the output will be 1.2

// let xx= 1.23456;
// let newXX = x.toPrecision(4);
// alert(newXX);

// //Math methods 
// //Finding the highest and lowest number
// let highest = Math.max(2 , 56, 12, 1, 233, 4);
// alert(highest);

// //lowest number
// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// alert(lowest);

// //Square roo and raising to the power of
// let result = Math.sqrt(64);
// alert(result);

// let result2 = Math.pow(5, 3);
// alert(result2);

// //Turning decimals into integers 
// //using math.round
// let x = 6.78;
// let y = 5.34;
// alert("X: "+ x+ " becomes "+ Math.round(x));
// alert("Y: "+ y+ " becomes "+ Math.round(y));

// //using math.ceil
// alert("X: "+ x+ " becomes "+ Math.ceil(x));//This method will always round up
// alert("Y: "+ y+ " becomes "+ Math.ceil(y));

// let negativeX = -x;
// let negativeY = -y;
// alert("negativeX: "+ negativeX+ " becomes "+ Math.ceil(negativeX));
// alert("negativeY: "+ negativeY+ " becomes "+ Math.ceil(negativeY));

// //The floor method rounds down
// alert("X:", x, "becomes", Math.floor(x));
// alert("Y:", y, "becomes", Math.floor(y));

// //Exponent and logarithm
// let x = 2;
// let exp = Math.exp(x);
// alert("Exp:"+ exp);
// let log = Math.log(exp);
// alert("Log:"+ log);


// Dates methods
// Creating dates 
// let currentDateTime = new Date();
// alert(currentDateTime);

// let now2 = Date.now();
// alert(now2);
// let milliDate = new Date(1000);
// alert(milliDate);

// //Methods to get and set elements of a date
// let d= new Date();
// console.log("Day of the week: " + d.getDay());
// console.log("Day of the month : " + d.getDate());
// console.log("Month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());
