# Weatherio

Weatherio is a weather web application that provides users with current weather conditions, a 5-day forecast, and additional weather-related information for a selected location. It utilizes HTML, CSS, and JavaScript to create an interactive and visually appealing user interface.

## Features

- **Current Weather:** Display the current weather conditions including temperature, description, and relevant icons.
- **5-Day Forecast:** Provide a detailed 5-day weather forecast with temperature and weather conditions for each day.
- **Location-based Weather:** Users can view weather information based on their current location or by searching for a specific city.
- **Air Quality Index (AQI):** Includes information about the Air Quality Index (AQI) along with corresponding health advisories.
- **Responsive Design:** The app is responsive and works seamlessly across various devices and screen sizes.

## Technologies Used

- **HTML/CSS:** Used for structuring and styling the web pages to create an attractive user interface.
- **JavaScript:** Implemented to fetch data from the OpenWeather API, handle user interactions, and dynamically update the UI.
- **OpenWeather API:** Integrated with the OpenWeather API to retrieve real-time weather data for different locations.
- **Git:** Version control system used for tracking changes and collaborating on the project.
- **GitHub:** Hosting platform for the project repository.
- **Deployment:** Deployed the web app to a hosting service for public access.

## How to Use

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/weatherio.git
   ```

   Navigate to the project directory:

   ```bash
   cd weatherio
   ```

2. Obtain an API key from [OpenWeather](https://openweathermap.org), craete and replace YOUR_API_KEY in the config.js file with your actual API key.

   ```bash
   const API_KEY = "YOUR_API_KEY";

   export default API_KEY;
   ```

3. Open the index.html file in your web browser to launch Weatherio.

4. Enter a city name in the search bar to view the weather forecast for that location.

## Demo

You can try out the live demo of Weatherio [here](https://weather-app-js-b6959.web.app).

## Credits

This Weatherio project is based on the tutorial by [CodeWithSadee](https://www.youtube.com/@codewithsadee), which provided valuable insights into web development and CSS techniques.

## License

This project is licensed under the [MIT License](LICENSE).
