const apikey = 'd87a15b85ebd121480b7bd164bad50b6';
const btn = document.querySelector('#btn');
const form = document.querySelector('.form');
const card = document.querySelector('.output');
const cityInput = document.querySelector('#name');
const card2 = document.querySelector('.feel');
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=${apikey}&units=metric`)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

form.addEventListener('submit', async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city)
    {
        try
        {
            const weatherData = await getWeather(city);
            displayWeatherInfo(weatherData);
        }
        catch(error)
        {
            console.log(error);
            displayError(error);
        }
    }
    else
    {
        displayError("Please enter a city");
    }
});

async function getWeather(city)
{

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    const response = await fetch(apiUrl);

    if(!response.ok)
    {
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}
function displayWeatherInfo(data)
{
    const {name: city, main: {temp, humidity, feels_like, pressure}, weather: [{description}]} = data;

    card2.textContent = "";
    card.style.display = 'grid';
    card.textContent = "";
    card.style.display = 'grid';

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement('p');
    const humidDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const feelDisplay = document.createElement('h1');
    const pressureDisplay = document.createElement('p');

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp).toFixed(1)}°C`;
    humidDisplay.textContent = humidity;
    descDisplay.textContent = description;
    feelDisplay.textContent = feels_like;
    pressureDisplay.textContent = pressure;

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidDisplay);
    card.appendChild(descDisplay);
    card2.appendChild(feelDisplay);
    card2.appendChild(pressureDisplay);
}

function displayError(messagge)
{
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = messagge;
    errorDisplay.classList.add("erroDisplay");

    card.textContent = "";
    card.style.display = 'flex';
    card.appendChild(errorDisplay);
}
