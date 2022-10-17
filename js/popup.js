const modal = document.querySelector("dialog")
const btnLeave = document.querySelector('.popup-btn__leave')
const btnSave = document.querySelector('.popup-btn__save')

function showPopup() {
    setTimeout(() => {
      modal.showModal()
    }, 2000)
  }


window.addEventListener('DOMContentLoaded', () => {
    const hasKey = localStorage.getItem('users')
    if(hasKey) {
        console.log('resgatei informação')
        showPopup()
    }
})

btnSave.addEventListener('click', () => {
  window.location.href = '/pages/home.html'
})

btnLeave.addEventListener('click', () => {
    localStorage.clear()
    modal.close()
})