import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { firebaseConfig } from "./firebaseConfig.js";

const username = document.getElementById('user')
const password = document.getElementById('password')
const error = document.getElementById('error')
const continueBtn = document.querySelector('.login__button')

const usersCredentials = {
    user: username.value,
    password: password.value,
    accessToken: ''
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)

const auth = getAuth(app)
console.log(auth)

onAuthStateChanged(auth ,(user) => {
    if(user) {
        window.location.href = '/pages/home.html'
    }
})

function signUp() {
    signInWithEmailAndPassword(auth, username.value, password.value)
        .then(response => {
            console.log('success', response)
            usersCredentials.accessToken = response._tokenResponse.refreshToken
            console.log(usersCredentials.accessToken)
            loginUser()
        })
        .catch((error) => {
            const errorCode = error.code

            const errorMessage = error.message
            invalidateUser()
            console.log(errorCode, errorMessage)
        })
}

continueBtn.addEventListener('click', validateUser)

function loginUser() {
    usersCredentials.user = username.value
    usersCredentials.password = password.value

    error.style.display = 'none'

    localStorage.setItem('users', JSON.stringify(usersCredentials))
    console.log(usersCredentials)

    window.location.href = './pages/home.html'

}

function validateUser() {

    if ((username.value && password.value) == "") {
        invalidateUser()
    } else {

        signUp()

    }
}

function invalidateUser() {
    error.style.display = 'block'
    username.style.borderColor = '#E9B425'
    password.style.borderColor = '#E9B425'
}



