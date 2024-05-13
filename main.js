const age = 19
const message = document.getElementById("message")

function checkAge() {
    if(age === 20) {
        message.textContent = "yay!"
    } else if(age > 20) {
        message.textContent = "old!"
    } else {
        message.textContent = "young!"
    }
}

checkAge()

