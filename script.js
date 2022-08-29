let weather = {
  // leaving the API key hard coded for demonstration purposes
  apiKey: "498ec749e72c5143ccc343309796b700",
  fetchweather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    ).then((response) => {
      response.json().then((data) => {
        this.displayWeather(data);
      });
    });
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText =
      description[0].toUpperCase() + description.slice(1);
    document.querySelector(".temperature").innerText = Math.round(temp) + "ºC";
    document.querySelector(".humidity").innerText =
      "Humidity " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind " + speed + " km/h";
  },
};
//https://api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&&appid={API key}
