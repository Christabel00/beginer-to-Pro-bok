// //IF AND IF ELSE STATEMENTS
// let rain=true;
// if(rain){
//     alert("**Taking my umbrealla outside**");
// } else{alert("**I can leave the umbrella home**");
// }
// //Practice exercise 4.1
// let lovely =true;
// //alert(lovely);


// if(lovely){
// alert("wow that is beautiful");
// }
// if(!lovely){
//     alert("thats sad to hear");
// }

// //ELSE IF STATEMENT

// let age = prompt("How old are you?");
// let cost = 0;
// let message;
// if (age < 3) {
//  cost = 0;
//  message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {
//  cost = 5;
//  message ="With the child discount, the fee is 5 dollars";
// } else if (age >= 12 && age < 65) {
//  cost = 10;
//  message ="A regular ticket costs 10 dollars.";

// } else {
//  cost = 7;
//  message ="A ticket is 7 dollars.";
// }
// alert(message);
// alert("Your Total cost "+cost);

// //PRACTUCE EXERCISE 4.2
// //Asking user for age
// let age = prompt("how old are you?");
// //converting age to an integer
// parseInt(age); 
// //creating a message variable
// let message;
// //The if statement
// if (age >= 21) {
//     message = "Welcome you can purchase alcohol";
// }
// if (age == 19 && age <21) {
//     message = "Entry allowed , alcohol purchase denied";
// } else {
//     message = "Apologies access denied!!";
// }
// alert(message);

// //CONDITIONAL TERNARY COPERATORS
// //ACTIVITY 4.3
// let id=true;
// let message =(id)? "allowed in" : "denied entry";
// alert( message);

// //SWITCH STATEMENT
// if (activity === "Get up") {
//     console.log("It is 6:30AM");
// } else if (activity === "Breakfast") {
//     console.log("It is 7:00AM");
// } else if (activity === "Drive to work") {
//     console.log("It is 8:00AM");
// } else if (activity === "Lunch") {
//     console.log("It is 12.00PM");
// } else if (activity === "Drive home") {
//     console.log("It is 5:00PM")
// } else if (activity === "Dinner") {
//     console.log("It is 6:30PM");
// }
// let activity=prompt("What do you wanna do?");
// switch(activity) {
//     case "Get up":
//     console.log("It is 6:30AM");
//     break;
//     case "Breakfast":
//     console.log("It is 7:00AM");
//     break;
//     case "Drive to work":
//     console.log("It is 8:00AM");
//     break;
//     case "Lunch":
//     console.log("It is 12:00PM");
//     break; 
//     case "Drive home":
//     console.log("It is 5:00PM");
//     break; 
//     case "Dinner":
//     console.log("It is 6:30PM");
//     break;
//    }

// // The default case
// //PRACTICE 4.4
// let random = Math.floor(Math.random() * 6);
// let qs = prompt("Give me a random string");

// switch (random) {
//     case "Wake up":
//         alert("its 5am");
//         break;
//     case "Gym":
//         alert("its 5:10am");
//         break;
//     case "take a shower":
//         alert("Its 6am");
//         break;
//     case "breakfast":
//         alert("its 7am");
//         break;
//     case "go to work":
//         alert("its 9am");
//         break;
//     case "meeting":
//         alert("its midday");
//         break;
// } 

// //COMBINING CASES
// let grade= prompt("How much did you get?")
// if(grade === "F" || grade === "D") {
//     console.log("You've failed!");
//    } else if(grade === "C" || grade === "B") {
//     console.log("You've passed!");
//    } else if(grade === "A") {
//     console.log("Nice!");
//    } else {
//     console.log("I don't know this grade.");
//    }

// //PRACTICE EXERCISE 4.5
let prize = prompt("Enter a number between 0 and 10");
parseInt(prize);
let outPut=mySelection;

switch (prize) {
    case 0:
        alert("You win R10000 Congratulations!!");
        break;
    case "2":
        alert("You came second you win R9000 congratulations!!");
        break;
    case "3":
        alert("You came third yay! You win R8000 congratulations!!");
        break;
    case "4":
        alert("You came 4th yay! You win R7000 congratulations!!");
        break;
    case "5":
        alert("You came 5th congratulations you win R6000");
        break;
    case "6":
        alert("You came 6th congratulations you win R5000 ");
        break;
    case "7":
        alert("You came 7th you tried pull up next time You win R4000");
        break;
    case "8":
        alert("You came 8th try again next time you win R3000");
        break;
    case "9":
        alert("You came 9th try again!! you win R2000");
        break;
    case "10":
        alert("You came last dont give up!! you win R1000");
        break;
}

