// alert("hello there");
// var name = "John";
// alert(name);

// var ten = 10;
// var ten2 = 10.0
// console.log(ten  + ten2)


// var firstName = "John";
// var lastName = "Doe";
// console.log(firstName + " " + lastName);  

// const happy = confirm("We are happy");
// if(happy){
//     alert("we are happy");
// }else{
//     alert("Baby  crying :c")
// }
// const password = prompt('Enter your password');
// let balance = 5000
// if (password === 'admin') {
//     alert ('Welcome admin!');
//     const withdrawal  = parseInt(prompt('how much do you want to redraw:'));
//     if(balance>=withdrawal){
//         alert("You have successfully withdrawn" + " " + "$" + withdrawal +"\n Your new balance is" + " " + "$" + (balance -= withdrawal));
//     }else{
//         alert("your money no reach  here, please try again later!");
//     }
// } else {
//     alert('Wrong password, try again');
// }

// const rain = confirm("is it raining");
// if (rain) {
//     alert ("it is raining go to your mama house");
// } else {
//     alert( "no its not raining come and play with ibabs");
//     }



// const age = prompt("Enter your age baba")

// if (age >= 18){
//     alert('Hey welcome baby')
// } else if(age >= 10 && age <= 17){
//     alert('get lost baby')
// }
// else(age ==  null)
// {
//     alert("mumu try get sense")
// }




// const score = prompt("enter your score between 1 and 100");
// let grade;
// if (score >= 90 && score <= 100) {
//   grade = "A";
// } else if (score >= 80 && score <= 90) {
//   grade = "B";
// } else if (score >= 70 && score <= 80) {
//   grade = "C";
// } else if (score >= 60 && score <= 70) {
//   grade = "D";
// } else if (score >= 50 && score <= 60) {
//   grade = "F";
// } else if (score < 0) {
//   grade = "invalid";
// } else {
//   grade = "no Grade";
// }

// alert("The student's grade is: " + grade);

// function hello(name){
//   return "Hello " +name+ "!!!"
// }
// const message = hello("Yomi")


// const age = parseInt(prompt( 'how old are you?'));
// if (age < 12){
//     alert("wait a little bit")
// }else if(age >= 12 && age < 16){
//     alert("you are still a fresh teen")
// }else if(age >= 16 && age < 18){
//     alert("you are still a grown teen")
// }else if(age >= 18 && age < 22){
//     alert("you are still a young adult, you fit go jail if u loose guard")
// }else if(age >= 22 && age < 27){
//     alert("you are still an adult")
// }else if(age >= 27 && age <= 30){
//     alert("you are to grown for this go and have a life")
// }else(age === null)
// {
//     alert("you be fool")
// }


// const marriage = prompt("enter your name")
// if(marriage === "david" || marriage === "feyi"){
//     alert("Happy marriage life")
// }else{
//     alert("get out go find feyi or david")
// }


// function isAnAdult(age){
//   if(age >=18){
//     return true
// }
// if(age < 18){
//   return false
// }
// }
// const person = parseInt(prompt("enter ur age:"))

// if(isAnAdult(person)){
//   alert("you are an an adukt")
// }else{
//   alert("not adult")
// }
// function amountOfGoods(price){
//   if(price >=500){
//     return true
// }
// if(price < 500){
//   return false
// }
// }
// const person = parseInt(prompt("What do you have to offer:"))

// if(amountOfGoods(person)){
//   alert("You can get it")
// }else{
//   alert("Low on funds")
// }


// const men = parseInt(prompt('How many men?'));
// switch (men) {
//   case 1:
//     console.log("one man")
//     break;
//   case 2:
//     console.log("two man")
//     break;
//   case 3:
//     console.log("three man")
//     break;
//   case 4:
//     console.log("four man")
//     break;
//   case 5:
//     console.log("one man")
//     break;
//     default:
//       console.log("invalid input")
// }

// initialising the bank app

// let balance = 5000
// const pin = "1234"
// function bank(){
// const transaction = parseInt(prompt("What would you like to do? \n 1. Withdrawal  \n 2. Deposit \n 3. Check Balance \n 4. Transfer \n 5. Airtime \n 6. Pay Bills"));


// switch (transaction) {
//   case 1:
//     alert("You have selected Withdrawal")
//     admin()
//     withDrawal()
//     break
//   case 2:
//     alert("You have selected Deposit")
//     admin()
//     deposit()
//     break
//   case 3:
//     alert("You have selected Check Balance")
//     checkBalance()
//     break
//   case 4:
//     alert("You have selected Transfer");
//     transfer();
//     break;
//   case 5:
//     alert("You have selected Airtime");
//     airtime();
//     break;
//   case 6:
//     alert("You have selected Pay Bills");
//     break;
//   default:
//     alert("Invalid Transaction! Please select a valid transaction option.")
//   }



    // const user = parseInt(prompt("How much do you want to redraw"))
    // if(user > balance){
    //   alert("Sorry, your account does not have enough money")
    // } 
// }


// function withDrawal() {
//   const password = prompt("Please enter your PIN");
//   if (password === pin) {
//     alert("Welcome to wayo bank")
//     const withdrawal = parseInt(prompt("How much do you want to redraw"));
//     if (withdrawal >= balance) {
//       alert("You have successfully withdrawn " + withdrawal + "\n Your new balance is " + (balance - withdrawal))
//     } else {
//       alert("You broke  die wrong pin")
//     }
//   } else {
//     alert("Wrong Pin! Try again")
//   }
// }

// function deposit() {
//   const newDeposit = parseInt(prompt("How much do you want to deposit"))
//   if (!isNaN(newDeposit)) {
//     balance += newDeposit;
    // const bank = prompt("Select your bank");
    // const sum = balance + newDeposit;
//     alert("Your current balance is " + balance + ". Thank You for Depositing")
//   } else {
//     alert("invalid  input. please enter a number")
//   }
// }

// function checkBalance() {
//   alert("Your Current Balance is " + balance)
// }

// function transfer() {
//   const supportedBanks = prompt("Select ur bank");
//   const recipientAccountNumber = prompt("Please enter the recipient's account number:");
//   if(recipientAccountNumber.length === 10){
//     alert("Welcome");
//     const transferAmount = parseInt(prompt("Please enter the amount you want to transfer:"));
//     if (transferAmount <= balance) {
//       balance -= transferAmount;
//       alert("Transfer successful! You have transferred " + transferAmount + " to account number " + recipientAccountNumber + " of  " + supportedBanks + ". Your new balance is " + balance + ".");
//     } else {
//       alert("Invalid input or insufficient balance. Please try again.");
//     }
//   }else{
//     alert("Invalid input. Account number must be 10 digits. Please try again.");
//   }
// }

//  function airtime(){
//    const airtime = parseInt(prompt("How much airtime do you want to buy?"));
//    if(airtime <= balance){
//      balance -= airtime;
//      alert("Airtime purchase successful! You have purchased " + airtime + " airtime. Your new balance is " + balance + ".");
//    }else{
//      alert("Invalid input or insufficient balance. Please try again.");
//    }
//  }
//  function admin(){
//   const password = prompt('Enter your password');
//   if (password === 'admin') {
//     alert ('Welcome admin!');
//     }else{
//         alert("your money no reach  here, please try again later!");
//     }
//  }



// array

// const foodItems = ["rice", "beans", "yam", "plantain", "garri", "semo", "eba", "amala", "fufu", "pounded yam"];
// console.log(foodItems)
// // add to an array from the end of the array using push method
// foodItems.push("moi moi")
// console.log(foodItems)
// // remove from the end of the array using pop method
// foodItems.pop()
// console.log(foodItems)
// // remove from the beginning of the array using shift method
// foodItems.shift("egg")
// console.log(foodItems)
// // add to the beginning of the array using unshift method
// foodItems.unshift("egg")
// console.log(foodItems)

// // create a new array from an existing array from the 1st index to the 5th index
// const newFoodItems = foodItems.slice(0, 5)
// console.log(newFoodItems);

// // to add from the middle of the array using splice method
// foodItems.splice(2, 0, "spaghetti", "noodles")
// console.log(foodItems)

// // to remove from the middle of the array using splice method
// foodItems.splice(2, 2, "spag", "mjm")
// console.log(foodItems)

// // object

// const actor = {
//   name: "Keanu Reeves",
//   age: 56,
//   country: "Canada",
//   networth: "360 million",
//   movies: ["The Matrix", "John Wick", "Speed", "47 Ronin", "Point Break"],

// }
// console.log(actor)

// // about me

// const aboutMe = {
//   name: "Ekezie Uchenna",
//   age: 90,
//   country: "Nigeria",
//   hobbies: ["coding", "reading", "gaming", "watching movies", "listening to music"],
//   single: true,
//   job: "Software Developer Intern, GOMYCODE",
//   networth: "$100 trillion",
//   institution: "GOMYCODE",
//   intro: function (){
//     return `Hello, my name is ${this.name}. i am a boy who has  always been interested in coding and technology. i have a networth of ${this.networth}.
//     I turned ${this.age} last year`;
//   }
// }
// console.log(aboutMe.intro ())




// // fuction to add to an array

// const foodItems = ["rice", "beans", "yam", "plantain", "garri", "semo", "eba", "amala", "fufu", "pounded yam"];
// function add () {
//   const newArr = prompt("enter ur food")
//   foodItems.push(newArr);
// }
// add()
// console.log(foodItems)

// function remove(){
//   const newRemove = prompt( "retype ur last push")
//   if(newRemove === foodItems[foodItems.length -1]){
//     console.log("Success")
//   }
//   else{
//     console.log("try again")
//   }
//   foodItems.pop();
// }
// remove()
//   console.log(foodItems)


let i = 0 
while(i < 200 ){
  if(i<100){
    console.log("i am sorry",i)
  }else{
    console.log('have u accepted my apologies', i)
  }
  i++
}