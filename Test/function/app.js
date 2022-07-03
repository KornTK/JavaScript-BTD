function sayHello (username, userlastname){
    return "Hello "+ username + " " + userlastname;
}
function getAge(){
    return 28
}
let nameInput = prompt("Enter your name: ")
let lastnameInput = prompt("Enter your lastname: ")
alert(sayHello(nameInput,lastnameInput))
