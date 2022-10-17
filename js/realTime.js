const time = document.querySelector('.clock__time');
const date = document.querySelector('.clock__date');

const updateTime = setInterval (() => {
    let nowTime = new Date().toLocaleTimeString([], 
        { 
            hour: '2-digit', 
            minute: '2-digit' 
        })
        
    let nowDate = new Date().toLocaleDateString('pt-BR',
        {
            month: 'long',
            year: 'numeric',
            day: 'numeric',
            weekday: 'long'
        })

        
    time.innerHTML = nowTime
    date.innerHTML = nowDate
}, 1000)


