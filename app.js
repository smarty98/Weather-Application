const ApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const Apikey = '041c57f3a53b31d744af9e3a31d45bca';

const searchBtn = document.getElementById('search-btn');
const Input = document.getElementById('input');
const Temp = document.querySelector('.temp');
const City = document.querySelector('.city');
const Humidity = document.querySelector('.humidity');
const Wind = document.querySelector('.wind');

async function getWeather(city){
    city = Input.value;
const res = await fetch(ApiUrl + `${city}` + `&appid=${Apikey}` + '&units=metric');
var data = await res.json();
console.log(data);
City.innerHTML = data.name;
Temp.innerHTML = data.main.temp + ' °C';
Humidity.innerHTML = data.main.humidity;
Wind.innerHTML = data.wind.speed + 'km/hr';
}
searchBtn.addEventListener('click',()=>{
    getWeather()
});