const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Weather API endpoint
app.get("/weather", async (req, res) => {
    const city = req.query.city;

    // Check city
    if (!city) {
        return res.status(400).json({
            error: "City is required"
        });
    }

    try {
        const apiKey = process.env.WEATHER_API_KEY;

        // Check API key
        if (!apiKey) {
            return res.status(500).json({
                error: "Weather API key is not configured"
            });
        }

        const apiUrl =
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&aqi=yes&q=${encodeURIComponent(city)}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.json(data);

    } catch (error) {
        console.error("Server error:", error);

        res.status(500).json({
            error: "Failed to fetch weather data"
        });
    }
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Weather server running on port ${PORT}`);
});