# Weatherio

Weatherio is a weather web application that provides users with current weather conditions, a 5-day forecast, and additional weather-related information for a selected location. It utilizes HTML, CSS, and JavaScript to create an interactive and visually appealing user interface.

## Features

- **Current Weather:** Display the current weather conditions including temperature, description, and relevant icons.
- **5-Day Forecast:** Provide a detailed 5-day weather forecast with temperature and weather conditions for each day.
- **Location-based Weather:** Users can view weather information based on their current location or by searching for a specific city.
- **Air Quality Index (AQI):** Includes information about the Air Quality Index (AQI) along with corresponding health advisories.
- **Responsive Design:** The app is responsive and works seamlessly across various devices and screen sizes.
- **Vite Integration:** Uses Vite for faster development and environment variable management.

## Technologies Used

- **HTML/CSS:** Used for structuring and styling the web pages to create an attractive user interface.
- **JavaScript:** Implemented to fetch data from the OpenWeather API, handle user interactions, and dynamically update the UI.
- **OpenWeather API:** Integrated with the OpenWeather API to retrieve real-time weather data for different locations.
- **Vite:** Utilized for a modern development environment and easy environment variable management.
- **Git:** Version control system used for tracking changes and collaborating on the project.
- **GitHub:** Hosting platform for the project repository.
- **Deployment:** Deployed using Vercel for seamless public access.

## How to Use

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/weatherio.git
   ```

   Navigate to the project directory:

   ```bash
   cd weatherio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Obtain an API key from [OpenWeather](https://openweathermap.org), create a `.env` file in the root directory, and add:

   ```env
   VITE_WEATHER_API_KEY=YOUR_API_KEY
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the application in your browser at `http://localhost:5173`.

6. Enter a city name in the search bar to view the weather forecast for that location.

## Deployment on Vercel

1. Push the repository to GitHub.
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Add an environment variable in Vercel:
   - **Key:** `VITE_WEATHER_API_KEY`
   - **Value:** Your OpenWeather API Key
4. Deploy the project.

## Demo

You can try out the live demo of Weatherio [here](https://weather-app-js-b6959.web.app).

## Credits

This Weatherio project is based on the tutorial by [CodeWithSadee](https://www.youtube.com/@codewithsadee), which provided valuable insights into web development and CSS techniques.

## License

This project is licensed under the [MIT License](LICENSE).
