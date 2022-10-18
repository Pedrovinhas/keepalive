const username = document.getElementById('user')
const password = document.getElementById('password')
const passwordIcon = document.getElementById('password-icon')
const userIcon = document.getElementById('user-icon')


window.addEventListener('resize', () => {
    if(window.screen.width >= '1024 ') {
        username.value.length == 0 ? userIcon.style.left = '350px' : userIcon.style.left = '300px' 
        password.value.length == 0 ? passwordIcon.style.left = '350px' : passwordIcon.style.left = '300px' 
    } else if(window.screen.width < '1024') {
        username.value.length == 0 ? userIcon.style.left = '230px' : userIcon.style.left = '185px' 
        password.value.length == 0 ? passwordIcon.style.left = '230px' : passwordIcon.style.left = '185px' 
       
    }
})

username.addEventListener('keyup', () => {
        if(window.screen.width >= '1024 ') {
            username.value.length == 0 ? 
            userIcon.style.left = '350px'
            :
            userIcon.style.left = '300px'   
        } else {
            username.value.length == 0 ? userIcon.style.left = '230px' : userIcon.style.left = '185px' 
        }
        username.style.borderColor = '#FFFFFF'
        

})

password.addEventListener('keyup', () => {
    if(window.screen.width >= '1024 ') {
        password.value.length == 0 ? 
        passwordIcon.style.left = '350px'
        :
        passwordIcon.style.left = '300px'   
    } else {
        password.value.length == 0 ? passwordIcon.style.left = '230px' : passwordIcon.style.left = '185px' 
    }
    password.style.borderColor = '#FFFFFF'
})

