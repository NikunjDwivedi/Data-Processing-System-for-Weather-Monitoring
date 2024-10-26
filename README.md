#  Real-Time Data Processing System for Weather Monitoring with Rollups and Aggregates

Hosted link:  https://divyanshi2206.github.io/Real-Time-Data-Processing-for-Weather-Monitoring-System/


## Overview

This application is a real-time data processing system to monitor weather conditions and provide summarized insights using rollups and aggregates. The system will utilize data from the OpenWeatherMap API (https://openweathermap.org/). The system continuously retrieves weather data from the OpenWeatherMap API. We need to sign up for a free API key to access the data.

## Features

- **System Setup:** Initializes and connects to the OpenWeatherMap API using a valid API key.
- **Data Retrieval:** Simulates API calls at configurable intervals to retrieve and parse weather data for specified locations.
- **Temperature Conversion:** Converts temperature values from Kelvin to Celsius or Fahrenheit based on user preference.
- **Daily Weather Summary:** Simulates weather updates over several days and calculates average, maximum, minimum temperatures, and dominant weather conditions.
- **Additional Parameters:** Supports retrieval and analysis of additional weather parameters such as humidity and wind speed.
- **5 days Weather Forecast** 

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
   git clone "https://github.com/Divyanshi2206/Real-Time-Data-Processing-for-Weather-Monitoring-System.git"
   cd App2-Weather-app
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

