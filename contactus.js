let nameInput = document.getElementById("name")

function pressAlert(event){
    event.preventDefault()
    alert(`Hello ${nameInput.value}! Thanks for signing up!`)
}

let contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit", pressAlert)