const header = document.querySelector('.header')
const weatherInput = document.querySelector('.header__input')
const container = document.querySelector('.container')

const refreshContainerData = (data) => {
    if (document.querySelector('.container__item')) document.querySelector('.container__item').remove()
    if (document.querySelector('.header__error'))  document.querySelector('.header__error').remove()
    const weatherHTML = 
    `
    <div class="container__item">
        <div class="container__content">
            <img src="https://openweathermap.org/img/wn/${data.icon}@2x.png">
            <h2 class="container__title">${data.cityName}</h2>
            <p class="container__description">${data.weatherCondition}</p>
            <h1 class="container__temperature">${data.temperature}&deg;C</h1>
        </div>
    </div>
    `
    container.insertAdjacentHTML('afterbegin', weatherHTML)
}


weatherInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        weatherSearch(e.target.value)
        .then((data) => {
            refreshContainerData(data)
        })
        .catch((err) => {
            if (document.querySelector('.header__error'))  document.querySelector('.header__error').remove()
            if (document.querySelector('.container__item')) document.querySelector('.container__item').remove()
            header.insertAdjacentHTML('beforeend', `<p class="header__error">${err.message}</p>`)
            console.error(err)
        })

    }
})

