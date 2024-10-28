#  Real-Time Data Processing System for Weather Monitoring with Rollups and Aggregates

Hosted link: https://app-2-data-processing-system-for-weather.onrender.com/


## Overview

This application is a real-time data processing system to monitor weather conditions and provide summarized insights using rollups and aggregates. The system will utilize data from the OpenWeatherMap API (https://openweathermap.org/). The system continuously retrieves weather data from the OpenWeatherMap API. We need to sign up for a free API key to access the data.

## Features

- **System Setup:** Initializes and connects to the OpenWeatherMap API using a valid API key.
- **Data Retrieval:** Simulates API calls at configurable intervals to retrieve and parse weather data for specified locations.
- **Temperature Conversion:** Converts temperature values from Kelvin to Celsius or Fahrenheit based on user preference.
- **Daily Weather Summary:** Simulates weather updates over several days and calculates average, maximum, minimum temperatures, and dominant weather conditions.
- **Additional Parameters:** Supports retrieval and analysis of additional weather parameters such as humidity and wind speed.
- **5 days Weather Forecast**

## Dynamic Background Video Display Logic
The app utilizes specific weather conditions and temperature values to display a relevant background video, enhancing user engagement with visual feedback on current weather. Below is the logic applied for different weather conditions:

### Snow or Cold Conditions
Condition: Temperature below 10°C or a snow-related Weather ID.
Action: Displays a snow video, creating a chilly ambiance.
![Screenshot (100)](https://github.com/user-attachments/assets/6d801b61-e190-4ac6-b992-ad3ad419dfc8)

### Pleasant Weather
Condition: Temperature between 10°C and 30°C.
Action: Plays a calm, pleasant video for mild weather.
![Screenshot (102)](https://github.com/user-attachments/assets/ef95cbe0-eaae-4e63-b515-ec1c9ca8e36e)

### Hot Weather
Condition: Temperature exceeding 30°C.
Action: Displays a hot-weather video, conveying heat visually.
![Screenshot (105)](https://github.com/user-attachments/assets/14e535d3-444b-4c65-baf1-595739840f88)

### Drizzle
Condition: Weather ID in the range 300–399, which corresponds to drizzle.
Action: Activates a light rain video, capturing the essence of drizzle.
![Screenshot (103)](https://github.com/user-attachments/assets/4a00e4e4-d754-438d-8cc1-283214745a80)

### Rain
Condition: Weather ID in the range 500–599, which indicates rain.
Action: Plays a rain video to represent moderate to heavy rainfall.
![Screenshot (96)](https://github.com/user-attachments/assets/ff10b52f-bdb8-405f-84eb-6b06454f2704)

### Thunderstorms
Condition: Weather ID in the range 200–299, indicating thunderstorms.
Action: Displays a video of thunderstorms to visually represent intense stormy weather.


## Design Choices

- **Modularity:** The system is divided into distinct modules for initialization, data retrieval, temperature conversion, and summary generation, making it easy to maintain and extend.
- **Configurability:** API call intervals and temperature units are configurable to allow flexibility.
- **Extensibility:** Designed to easily incorporate additional weather parameters from the OpenWeatherMap API.

## Requirements
- Screen 1070*680 minimum
- Nodejs (optional in case system do not have live server utility)

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. **Clone the Repository**
   ```bash
   git clone "https://github.com/NikunjDwivedi/Data-Processing-System-for-Weather-Monitoring.git"
   ```

2. **Install Backend Dependencies**

   ```bash
   npm install
   
   ```
3. **run live server**

   ```bash
   npm install http-server -g
   http-server -p 8080
   ```
   if Port 8080 is in use
   ```bash
   npm install http-server -g
   http-server -p 8081
   ```

