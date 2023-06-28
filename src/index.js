const API_KEY = "87fd03f8c6d24989bda195656232806"

async function getWeather(city) {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}}&days=3&aqi=no&alerts=no`;
    const response = await fetch(url);
    const data = await response.json();
    return data.forecast.forecastday;
}

async function weatherUI(e) {
    e.preventDefault();
    const form = e.target;
    const days = await getWeather(form["city"].value);
    const container = document.createElement("div");
    
    for (let i = 0; i < days.length; i++) {
        const temp = days[i].hour[0].temp_c;
        const element = document.createElement("h2");
        element.textContent = temp;
        container.appendChild(element);
    }

    const weather_div = document.querySelector("#weather-div");
    weather_div.innerHTML = "";
    weather_div.appendChild(container)
}

const inputUI = () => {
    const form = document.createElement("form");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const btn = document.createElement("button")

    input.id = "city";
    input.name = "city";
    input.value = "london";
    
    label.for = "city";
    label.textContent = "Type city / country: ";

    btn.textContent = "Get weather";

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(btn);

    form.onsubmit = weatherUI;  

    return form; 
}

document.body.appendChild(inputUI());
const weather_div = document.createElement("div");
weather_div.id = "weather-div";
document.body.appendChild(weather_div);

btn = document.querySelector("button");
btn.click();