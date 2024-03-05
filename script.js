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
const password = prompt('Enter your password');
let balance = 5000
if (password === 'admin') {
    alert ('Welcome admin!');
    const withdrawal  = parseInt(prompt('how much do you want to redraw:'));
    if(balance>=withdrawal){
        alert("You have successfully withdrawn" + " " + "$" + withdrawal +"\n Your new balance is" + " " + "$" + (balance -= withdrawal));
    }else{
        alert("your money no reach  here, please try again later!");
    }
} else {
    alert('Wrong password, try again');
}




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
// if (score >= 90) {
//   grade = "A";
// } else if (score >= 80) {
//   grade = "B";
// } else if (score >= 70) {
//   grade = "C";
// } else if (score >= 60) {
//   grade = "D";
// } else {
//   grade = "F";
// }

// alert("The student's grade is: " + grade);