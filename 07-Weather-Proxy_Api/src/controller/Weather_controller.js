const axios = require('axios');

exports.getWeather = async (req, res) => {
    try {
        const { city } = req.query;

        if (!city) {
            return res.status(400).json({ message: "City is required" });
        }

        const apiKey = process.env.WEATHER_API_KEY;

        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = response.data;

        const result = {
            city: data.name,
            temperature: data.main.temp,
            weather: data.weather[0].description,
            humidity: data.main.humidity
        };

        res.json(result);

    } catch (err) {
        res.status(500).json({
            message: "Error fetching weather",
            error: err.message
        });
    }
};