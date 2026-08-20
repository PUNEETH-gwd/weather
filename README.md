# Weather App

A full-stack weather application built with HTML, CSS, JavaScript, Node.js, and Express.

## 🚀 Live Demo

[Open Weather App](https://weather-1-1nml.onrender.com)


A simple weather application that allows users to search for the current weather of a city.

## Features

- Search weather by city name
- Displays temperature
- Displays humidity
- Displays weather condition
- Error handling for invalid cities
- Secure API key handling using environment variables

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- WeatherAPI

## Project Structure

weather-app/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
├── .env.example
└── README.md

## Setup

### 1. Clone the repository

git clone YOUR_GITHUB_REPOSITORY_URL

### 2. Go to the backend

cd backend

### 3. Install dependencies

npm install

### 4. Create .env

Create a file named .env inside the backend folder.

Add:

WEATHER_API_KEY=your_weatherapi_key_here

Replace the value with your own WeatherAPI key.

### 5. Start the backend

npm start

The backend will run on:

http://localhost:5000

### 6. Run the frontend

Open:

frontend/index.html

in your browser.

## Security

The WeatherAPI key is stored in an environment variable and is not included in the GitHub repository.

The `.env` file is excluded using `.gitignore`.