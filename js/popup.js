import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { firebaseConfig } from "./firebaseConfig.js";

const modal = document.querySelector("dialog")
const btnLeave = document.querySelector('.popup-btn__leave')
const btnSave = document.querySelector('.popup-btn__save')

const user = JSON.parse(localStorage.getItem("users"))

const app = initializeApp(firebaseConfig);
console.log(app)

const auth = getAuth(app)
console.log(auth)

function signInUserAgain() {
  signInWithEmailAndPassword(auth, user.user, user.password)
        .then(response => {
            console.log('success', response)

            signInUser()
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
        
            console.log(errorCode, errorMessage)
        })
}

function signInUser() {
  window.location.href = '/pages/home.html'
}

function showPopup() {
    setTimeout(() => {
      modal.showModal()
    }, 100)
  }


window.addEventListener('DOMContentLoaded', () => {
    const hasKey = localStorage.getItem('users')
    if(hasKey) {
        console.log('resgatei informação')
        showPopup()
    }
})

btnSave.addEventListener('click', signInUserAgain)

btnLeave.addEventListener('click', () => {
    localStorage.clear()
    modal.close()
})