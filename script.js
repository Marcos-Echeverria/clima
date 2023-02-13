let lon ;
let lat ;
let temperature = document.querySelector(".temp");
let sumary = document.querySelector(".sumary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273.15


window.addEventListener("load",() =>{
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) =>{
            console.log(position);
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            const api_id = '1059459a57e5f521ba79b5780035259c'
            const url_base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_id}`;
            
            fetch(url_base)
            .then((response) => {
                console.log("Data Json: ");
                return response.json();
            })
            .then((data) => {
                console.log("La data es esta: ");
                console.log(data);
                temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
                sumary.textContent = data.weather[0].description;
                loc.textContent = data.name + ", " + data.sys.country;
            });
        })};
});