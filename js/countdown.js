import { signOutUser } from "./logout.js";
const countdownSeconds = document.getElementById('countdown')
let seconds = 600;


const countdownTimer = setInterval(() => {
    seconds == 0 ? redirectToLoginPage() : 
    seconds--
    countdownSeconds.textContent = seconds
}, 1000)


function redirectToLoginPage() {
    clearInterval(countdownTimer)
    // localStorage.clear()
    signOutUser()
    // window.location.href = '../index.html'
}
