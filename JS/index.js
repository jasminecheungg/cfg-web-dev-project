let nameInput = document.getElementById("name")

function pressAlert(event){
    event.preventDefault()
    alert(`Hello ${nameInput.value}! Thanks for signing up!`)
}

let signUpForm = document.getElementById("signUpForm")
signUpForm.addEventListener("submit", pressAlert)