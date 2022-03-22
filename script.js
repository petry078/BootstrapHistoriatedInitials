let nameInput = document.querySelector("#nameInput")
let emailInput = document.querySelector("#emailInput")

let nameInputOk = false;
let emailInputOk = false;

function validName() {
    let txt = document.querySelector("#txtNameInput")
    if (nameInput.value.length < 3) {
        txt.innerHTML = 'Name must have 3 or more characters.'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Ok!'
        txt.style.color = 'black'
        nameInputOk = true;  
    }
}

function validEmail() {
    let txt = document.querySelector('#txtEmailInput')
    if (emailInput.value.indexOf('@') == -1 || emailInput.value.indexOf('.com') == -1) {
        txt.innerHTML = "Please, insert a valid e-mail."
        txt.style.color = 'red'
        emailInputOk = false; 
    } else {
        txt.innerHTML = "Ok!"
        txt.style.color = 'black'
        emailInputOk = true;     
    }
}

function send() {
    if (nameInputOk == true && emailInputOk == true) {
        alert ("You are now subscribed. Thank you!")
    } else {
        alert ("Please, fill the form correctly.")
    }
}

