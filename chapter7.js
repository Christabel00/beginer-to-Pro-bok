// //Classes and objects
// //Object example
// let dog = { dogName: "JavaScript", 
//  weight: 2.4, 
//  color: "brown", 
//  breed: "chihuahua"
//  };

//  function Dog(dogName, weight, color, breed) { 
//     this.dogName = dogName; 
//     this.weight = weight; 
//     this.color = color; 
//     this.breed = breed; 
//    } 
//    let dog = new Dog("Jacky", 30, "brown", "labrador");
// alert(dog.dogName+ "is a "+ dog.breed+ " and weighs "+ dog.weight+ 
// "kg.");

// //Constructors
// class Person {
//     constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
//    }
//    let p=new Person("Maaike", "van Putten");
//    alert("Hallo " + p.firstname);

//    //Practice exercise 7.1
//    class Person{
//     constructor(firstname , lastname){
//         this.firstname=firstname;
//         this.lastname = lastname;
//     }
//    }
//    let p= new Person("Ruvi" , "Mupedziswa");
// let p2= new Person("Ikem " , "Ngoni");
// alert("Hallo " +p.firstname +" " + p.lastname);
// alert("Hallo " + p2.firstname + " "+ p2.lastname);

// //Methods
// class Person {
//     constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
//     greet() {
//     alert("Hi there! I'm "+ this.firstname);
//     }
//    }
//    let p= new Person("Ruvimbo" , "Mupedziswa");
//    p.greet();

// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname= lastname;
//     }
//     greet(){
//         alert("Hi there! I am " + this.firstname);
//     }
// }
// let p= new Person("Lulu" ,"Mupedziswa");
// p.greet();


// class Person {
//     constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
//     greet() {
//     console.log("Hi there!");
//     }
//     compliment(name, object) {
//     return "That's a wonderful " + object + ", " + name;
//     }
//    }
//    let compliment = p.compliment("Harry", "hat");
// console.log(compliment);

// //Exercise 7.2
// class Person{
//     constructor(firstname , lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     fullname(){
//         return "Hey " + this.firstname + " " + this.lastname;
//     }
// }
// let p1 = new Person("Lesydia " , "Roseline");
// let p2= new Person("Prince " , "Mupedziswa");
// alert(p1.fullname());
// alert(p2.fullname());

// //Properties
// //unaccessible properties
// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname , lastname){
//         this.#firstname=firstname;
//         this.#lastname = lastname;
//     }
// }
// let p=  new Person("Maria" ,"Saga");
// alert(p.firstname);
// //output will be undefined

// //Getters and setters
// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname , lastname){
//         this.#firstname =firstname;
//         this.#lastname = lastname;
//     }
//     get firstname(){
//         return this.#firstname;
//     }
  
//         set firstname(firstname) { 
//             if(firstname.startsWith("M")){
//             this.#firstname = firstname; 
//             } else {
//             this.#firstname = "M" + firstname; 
//             }
//             }
    

//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(lastname){
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("Maria", "Saga");
// p.firstname ="Ikem";
// alert(p.firstname);

// //Inheritance
// class vehicle{
//     constructor(color, currentSpeed, maxSpeed){
//         this.color =color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed =maxSpeed;
//     }
//     move(){
//         alert("moving at " + this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed += amount;
//     }
// }
// class Motorcycle extends vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//     super(color, currentSpeed, maxSpeed);
//     this.fuel = fuel;
//     }
//     doWheelie() {
//     alert("Driving on one wheel!");
//     }
//    }
//    let motor= new Motorcycle("Black", 0, 250, "gasoline");
//    alert(motor.color);
//    motor.accelerate(70);
//    motor.move();

// //Prototypes
// class Person{
//     constructor(firstname , lastname){
//         this.firstname= firstname;
//         this.lastname = lastname;
//     }
//     greet(){
//         alert("Hi there!")
//     }
// }
// Person.prototype.introduce=function(){
//     alert("Hi, i am "+ this.firstname);
// }
// Person.prototype.favoriteColor="green";
// let p=new Person("Maria" , "Saga");
// alert(p.favoriteColor);
// p.introduce();

// //Practice exercise 7.3
// class animal{
//     constructor(name , sound){
//         this.name=name;
//         this.sound=sound;
//     }
//     run(){
//         alert("This is a " + this.name +" and it " + this.sound);
//     }
// }
// animal.prototype.color= function(){
//     return this.name + "is cute";
// }
// let cat =new animal("cat" , "moew");
// let cow = new animal("cow" , "moo");
// cat.run();
// alert(cat.color());
// cow.run();
// alert(cow.color());

//Chapter projects
//Employee tracking app

class employees{
    constructor(firstnames ,lastnames , years){
        this.firstnames=firstnames;
        this.lastnames=lastnames;
        this.years=years;
    }
    people(){
        alert("You are " + this.firstnames + "You have worked for " + years)
    }
}
let person1= new employees("Ruvimbo" , "Mupedziswa" , "2");
person1.people();
alert(people());
