import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { firebaseConfig } from "../firebaseConfig.js";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

onAuthStateChanged(auth ,(user) => {
    if(!user) {
        window.location.href = '../index.html'
        console.log('redirecionado')
    }
})