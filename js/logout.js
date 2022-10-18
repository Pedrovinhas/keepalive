import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js'
import {  initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { firebaseConfig } from "./firebaseConfig.js";



const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const logoutBtn = document.querySelector('.menu-button__logout')

export function signOutUser() {
    signOut(auth).then(() => {
        window.location.href = '../index.html'

  
      
      }).catch((error) => {
        
        console.log(error)
      });
}


logoutBtn.addEventListener('click', () => {
    signOutUser()

})

