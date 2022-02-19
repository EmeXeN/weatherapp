const key = 'f523e0a9df303bc5678966de29cfba39'

const weatherSearch = async (city) => {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    if (response.status !== 200) throw new Error('Could not find the city')
    const data = await response.json()
    return {
        cityName: data.name,
        weatherCondition: data.weather[0].description,
        temperature: Number(data.main.temp - 273.15).toFixed(1),
        icon: data.weather[0].icon
    }
}