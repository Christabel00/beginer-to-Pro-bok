// arr3= new Array(10);//array with 10 unknown values
// arr4=[10];//Array with 1 value 10

// alert(arr3);
// alert(arr4);

// let arr= ["hi there", 5,true];
// alert(typeof arr[0]);
// alert(typeof arr[1]);
// alert(typeof arr[2]);

// const arr = ["hi there"];
// arr[0] = "new value";
// alert(arr[0]);

// //ACCESSING ELEMNTS.
// cars = ["Toyota", "Renault", "Volkswagen"];
// alert(cars[0]);
// alert(cars[1]);
// alert(cars[2]);

// //OVERWRITTING ELEMENTS
// cars[0] ="Tesla";
// alert(cars[0])


// //BUILT IN LENGTH PROPERTY
// colors = ["black", "orange", "pink"]
// booleans = [true, false, false, true];
// emptyArray = [];

// alert("Length of colors:"+ colors.length);
// alert("Length of booleans:"+booleans.length);
// alert("Length of empty array:", emptyArray.length);

// //ACCESSING LAST EMENT OF THE ARRAY.
// lastElement = colors[colors.length - 1];

// //Prcatice Exercise 3.1
// let shopping =["Milk " , "Bread " , "Apples"];
// alert(shopping.length);
// shopping[1] ="Bananas"; //Overwriting 
// alert(shopping);

// //ARRAY METHODS
// //ADDING AND REPLACING ELEMENTS
// favoriteFruits = ["grapefruit ", "orange  ", "lemon"];
// favoriteFruits.push("tangerine ");
// favoriteFruits.push("lime ");//another method that works
// alert(favoriteFruits);//push method adds element at the end of the array

// //SPLICE METHOD 
// let arrOfShapes =["Circle " , "triangles ", "rectangle " , "pentagon"];
// arrOfShapes.splice(3,0,"square" , "trapezoid");
// alert(arrOfShapes);

// //CONCAT METHOD 
// let arr5=[1 , 2, 3];
// let arr6=[4 , 5,6] ;
// let arr7 = arr5.concat(arr6);
// alert(arr7);

// //CONCAT METHOD TO ADD VALUES 
// let arr8 = arr7.concat(7,8,9);
// //alert(arr8);

// //DELETETING ELEMENTS
// arr8.pop();


// // arr8.shift();
// // //alert(arr8);
// let arr8=[1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr8.splice(1,3)
// alert(arr8);

// //FINDING ELEMENTS
// arr8=[2, 6, 7, 8];
// let findValue = arr8.find(function(e) {return e===6});
// let findValue2= arr8.find(e=>e ===10);
// alert(findValue , findValue2);

// arr9=[2, 6, 7, 8];
// let findIndex = arr9.indexOf(6);
// let findIndex2 = arr9.indexOf(10);
// alert(findIndex , findIndex2);

// //SORTING
// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// names.sort();
// alert(names);

// let ages = [18, 72, 33, 56, 40];
// ages.sort();
// alert(ages);

// //REVERSING 
// names.reverse();
// alert(names);

// //PRACTICE EXERCISE 3.2
// let shopping =["Milk " , "Bread " ,"Apples"];
// shopping[1]="Bananas"
// //shopping.pop();//method to remove last element of an array
// //alert(shopping);
// shopping.sort();
// //alert(shopping);

// let find= shopping.indexOf("Milk");
// //alert(find);

// shopping.splice(2,0 ,"Carrots" , "Lettuce" );
// //alert(shopping);

// let list =["juice" ,"pop"];
// let shoppingList =shopping.concat(list);
// alert(shoppingList);

// let findIndex= shoppingList.indexOf("pop");
// alert(findIndex);

// //MULTIDIMENSIONAL ARRAYS
// //a list of lists
// let someValues1 = [1, 2, 3];
// let someValues2 = [4, 5, 6];
// let someValues3 = [7, 8, 9];
// let arrOfArrays = [someValues1, someValues2, someValues3];
// alert(arrOfArrays);

// //Two dimensional array
// let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// //Accesing elements of a 2 dimensional array
// let value1 = arrOfArrays[2][1];
// alert(value1);
// arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
// alert(arrOfArraysOfArrays);

// //PRACTICE EXERCISE 3.3
// let arr=[1,2,3];
// let nested= [arr , arr, arr];
// alert(nested);

// alert(nested[0][1]);

// //OBJECTS IN JAVASCRIPT
// let arr = [0, 1, 2];
// alert(typeof arr);

// let dog = { dogName: "JavaScript", 
//  weight: 2.4, 
//  color: "brown", 
//  breed: "chihuahua", 
//  age: 3, 
//  burglarBiter: true
//  };
//  let dogColor1 = dog.color;
//  //alert(dogColor1);

//  //UPDATING OBJECTS
// dog.color="blue";
// console.log(dog);

// //PRACTICE EXERCISE 3.4
//  let mycar={ make:"Suziki",
// model : "swift",
// year: 2024,
// ownwer:"Ruvimbo",
// color:"yellow"
//  };

//  //myCar[variable] = "color";
//  //myCar["color"]="blue";
// console.log(mycar["make"]);

//objects and arrays
//OBJECTS IN OBJECTS
// let company = { companyName: "Healthy Candy",
//  activity: "food manufacturing",
//  address: {
//  street: "2nd street",
//  number: "123",
//  zipcode: "33116",
//  city: "Miami",
//  state: "Florida"
//  },
//  yearOfEstablishment: 2021
//  };
//  company.address.zipcode = "33117";
//  company["address"]["number"] = "100";

// //ARRAYS IN OBJECTS 
// company = { companyName: "Healthy Candy",
//  activities: ["food manufacturing", 
// "improving kids' health", "manufacturing toys"],
//  address: {
//  street: "2nd street",
//  number: "123",
//  zipcode: "33116",
//  city: "Miami",
//  state: "Florida"
//  },
//  yearOfEstablishment: 2021
//  };
 
// //OBJECTS IN ARRAYS
// let addresses = [{
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
//     },
//     {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas"
//     }];
// let add =addresses[0].city;
// alert(add);

// //OBJECTS IN ARRAYS IN OBJECTS
// company = { companyName: "Healthy Candy",

//  activities: [ "food manufacturing", 
// "improving kids' health", 

// "manufacturing toys"],

//  address: [{
//  street: "2nd street",
//  number: "123",
//  zipcode: "33116",
// city: "Miami",
//  state: "Florida"
//  },
   
//  {
//  street: "1st West avenue",
//  number: "5",
//  zipcode: "75001",
// city: "Addison",
// state: "Texas"
//  }],
//  yearOfEstablishment: 2021
//  };

// //PRACTICE EXERCISE 3.5
// let people={
//     friends:[
// {name:"Natasha",
//     surname:"Dube",
//     id: "12345"

//  },
//  {name1:"Ruvimbo",
//  id1:"2356",
//  surname1:"Lulu"
//  }]

// };
// console.log(people);

