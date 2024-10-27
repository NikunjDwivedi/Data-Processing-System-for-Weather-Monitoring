
// let weather = {
//   apiKey:"8256f5243096df992f2b7ae07b4eeeff",
//   fetchWeather: function (city) {
//     fetch(
//       "https://api.openweathermap.org/data/2.5/forecast?q="
//       +city
//       +"&units=metric&appid="
//       + this.apiKey
//     )
//       .then((response) => {
//         if (!response.ok) {
//           alert("No weather found.");
//           throw new Error("No weather found.");
//         } 
//         return response.json();
//       })
//       .then((data) => this.displayWeather(data));
//   },
//   displayWeather: function (data) {

    

//     const { name } = data.city ;
//     const { icon, description } = data.list[0].weather[0];
//     const { temp,feels_like, humidity,temp_min,temp_max } = data.list[0].main;
//     const { speed } = data.list[0].wind;
//     const  datetime  = data.list[0].dt_txt;
//     // console.log(name,icon,description);
//     document.querySelector(".city").innerText = "Weather in " + name;
//     document.querySelector(".icon").src =
//       "https://openweathermap.org/img/wn/" + icon + ".png";
//     document.querySelector(".description").innerText = description;
//     document.querySelector(".dt").innerText = "last updated:  "+ datetime;

//     const convertTemp = (temp, unit) => {
//       if (unit === "F") {
//         return ((temp * 9 / 5) + 32).toFixed(2);
//     } else if (unit === "K") {
//         return (temp + 273.15).toFixed(2);
//     } else {
//         return temp.toFixed(2);
//     }
//   };
  
//   const selectedUnit = ttt;
  
//   document.querySelector(".city").innerText = "Weather in " + name;
//   document.querySelector(".icon").src =
//       "https://openweathermap.org/img/wn/" + icon + ".png";
//   document.querySelector(".description").innerText = description;
//   document.querySelector(".dt").innerText = "Last updated: " + datetime;
  
//   document.querySelector(".temp").innerText = convertTemp(temp, selectedUnit) + " °" + selectedUnit;
//   document.querySelector(".temp-feels-like").innerText = "Feels like: " + convertTemp(feels_like, selectedUnit) + " °" + selectedUnit;
//   document.querySelector(".temp-avg").innerText = "Avg Temp: " + convertTemp((temp_min + temp_max) / 2, selectedUnit) + " °" + selectedUnit;
//   document.querySelector(".temp-min").innerText = "Min Temp: " + convertTemp(temp_min, selectedUnit) + " °" + selectedUnit;
//   document.querySelector(".temp-max").innerText = "Max Temp: " + convertTemp(temp_max, selectedUnit) + " °" + selectedUnit;
  
//   document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
//   document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
  
//   document.querySelector(".weather").classList.remove("loading");
  
//   document.querySelector(".icon1").src =
//       "https://openweathermap.org/img/wn/" + data.list[6].weather[0].icon + ".png";
//   document.querySelector(".temp1").innerText = convertTemp(data.list[6].main.temp, selectedUnit) + " °" + selectedUnit;
//   document.querySelector(".dt1").innerText = data.list[6].dt_txt;
  
//   document.querySelector(".icon2").src =
//       "https://openweathermap.org/img/wn/" + data.list[12].weather[0].icon + ".png";
//   document.querySelector(".temp2").innerText = convertTemp(data.list[12].main.temp, selectedUnit) + " °" + selectedUnit;
//   document.querySelector(".dt2").innerText = data.list[12].dt_txt;
  
//   document.querySelector(".icon3").src =
//       "https://openweathermap.org/img/wn/" + data.list[18].weather[0].icon + ".png";
//   document.querySelector(".temp3").innerText = convertTemp(data.list[18].main.temp, selectedUnit) + " °" + selectedUnit;
//   document.querySelector(".dt3").innerText = data.list[18].dt_txt;
  
//   document.querySelector(".icon4").src =
//       "https://openweathermap.org/img/wn/" + data.list[24].weather[0].icon + ".png";
//   document.querySelector(".temp4").innerText = convertTemp(data.list[24].main.temp, selectedUnit) + " °" + selectedUnit;
//   document.querySelector(".dt4").innerText = data.list[24].dt_txt;
  
//   document.querySelector(".icon5").src =
//       "https://openweathermap.org/img/wn/" + data.list[30].weather[0].icon + ".png";
//   document.querySelector(".temp5").innerText = convertTemp(data.list[30].main.temp, selectedUnit) + " °" + selectedUnit;
//   document.querySelector(".dt5").innerText = data.list[30].dt_txt;

//   },
//   search: function () {
//     this.fetchWeather(document.querySelector(".search-bar").value);
//   },
// };


// document.querySelector(".search button").addEventListener("click", function () {
//   weather.search();
// });

// document
//   .querySelector(".search-bar")
//   .addEventListener("keyup", function (event) {
//     if (event.key == "Enter") {
//       weather.search();
//     }
//   });
//   var ttt = "C";
//   document.querySelector("select").addEventListener("change", function (evt) {
//       ttt = evt.target.value;
//       console.log(ttt);
//       weather.fetchWeather(document.querySelector(".city").innerText.split("Weather in ")[1] || "Bangalore");
//   });

// weather.fetchWeather("Bangalore");



let weather = {
  apiKey: "8256f5243096df992f2b7ae07b4eeeff",

  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q="
      + city
      + "&units=metric&appid="
      + this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => {
        this.displayWeather(data);
        this.changeBackgroundVideo(data); // Change the background video based on weather
      });
  },

  displayWeather: function (data) {
    const { name } = data.city;
    const { icon, description } = data.list[0].weather[0];
    const { temp, feels_like, humidity, temp_min, temp_max } = data.list[0].main;
    const { speed } = data.list[0].wind;
    const datetime = data.list[0].dt_txt;

    // Display weather information
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".dt").innerText = "Last updated: " + datetime;

    const convertTemp = (temp, unit) => {
      if (unit === "F") {
        return ((temp * 9 / 5) + 32).toFixed(2);
      } else if (unit === "K") {
        return (temp + 273.15).toFixed(2);
      } else {
        return temp.toFixed(2);
      }
    };

    // Use the global selected unit
    document.querySelector(".temp").innerText = convertTemp(temp, ttt) + " °" + ttt;
    document.querySelector(".temp-feels-like").innerText = "Feels like: " + convertTemp(feels_like, ttt) + " °" + ttt;
    document.querySelector(".temp-avg").innerText = "Avg Temp: " + convertTemp((temp_min + temp_max) / 2, ttt) + " °" + ttt;
    document.querySelector(".temp-min").innerText = "Min Temp: " + convertTemp(temp_min, ttt) + " °" + ttt;
    document.querySelector(".temp-max").innerText = "Max Temp: " + convertTemp(temp_max, ttt) + " °" + ttt;

    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";

    document.querySelector(".weather").classList.remove("loading");

    // Update forecast data for next 5 days
    for (let i = 1; i <= 5; i++) {
      const forecast = data.list[i * 6]; // Fetching data for every 6 hours for next 5 days
      document.querySelector(`.icon${i}`).src =
        "https://openweathermap.org/img/wn/" + forecast.weather[0].icon + ".png";
      document.querySelector(`.temp${i}`).innerText = convertTemp(forecast.main.temp, ttt) + " °" + ttt;
      document.querySelector(`.dt${i}`).innerText = forecast.dt_txt;
    }
  },

  changeBackgroundVideo: function (data) {
    // Get the temperature and degree unit from the dropdown
    const temperatureValue = data.list[0].main.temp; // Temperature from API
    const degreeUnit = document.getElementById("deg").value; // Get selected unit from dropdown
    let temperature;
  
    // Convert temperature to Celsius based on selected unit
    if (degreeUnit === "C") {
      temperature = temperatureValue; // Already in Celsius
    } else if (degreeUnit === "K") {
      temperature = temperatureValue - 273.15; // Convert from Kelvin to Celsius
    } else if (degreeUnit === "F") {
      temperature = (temperatureValue - 32) * 5 / 9; // Convert from Fahrenheit to Celsius
    }
  
    const weatherId = data.list[0].weather[0].id; // Get the weather ID
    const bgVideo = document.getElementById("bgvideo"); // Reference to the video element
  
    // Change the video source based on weather conditions
    if (weatherId >= 200 && weatherId < 330) {
      bgVideo.src = "./videos/thunderstorm.mp4"; // Thunderstorm video
    } else if (weatherId >= 330 && weatherId < 510) {
      bgVideo.src = "./videos/drizzle.mp4"; // Drizzle video
    } else if (weatherId >= 510 && weatherId < 600) {
      bgVideo.src = "./videos/rain.mp4"; // Rain video
    } else if (temperature < 10) {
      bgVideo.src = "./videos/snow.mp4"; // Video for snowing/freezing
    } else if (temperature >= 10 && temperature <= 30) {
      bgVideo.src = "./videos/pleasant.mp4"; // Video for pleasant weather
    } else if (temperature > 30) {
      bgVideo.src = "./videos/hot.mp4"; // Video for hot weather
    }
  
    // Update the video source to the final selected source
    bgVideo.load(); // Load the new video source
    bgVideo.play(); // Start playing the video
  },
  

  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

// Initialize selected unit
var ttt = "C";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });

  document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      weather.search();
    }
  });

  document.querySelector("select").addEventListener("change", function (evt) {
    ttt = evt.target.value;
    console.log(ttt);
    weather.fetchWeather(document.querySelector(".city").innerText.split("Weather in ")[1] || "Bangalore");
  });

  // Fetch weather for default city on load
  weather.fetchWeather("Bangalore");
});
