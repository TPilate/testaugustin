# Weather App

A modern weather application built with **Angular 20.3** (latest version) that displays real-time weather information using the OpenWeatherMap API.

![Weather App Screenshot](https://github.com/user-attachments/assets/561aa564-2cfd-4bb9-8e54-010a1d0d92f3)

## Features

- 🌡️ Real-time weather data
- 🔍 Search weather by city name
- 📊 Display temperature, humidity, wind speed, and pressure
- 🎨 Beautiful gradient UI with smooth animations
- 📱 Responsive design for mobile and desktop
- ⚡ Built with Angular 20.3 standalone components
- 🚀 Fast and lightweight

## Technologies Used

- **Angular 20.3** - Latest version of Angular framework
- **TypeScript 5.9** - For type-safe code
- **RxJS 7.8** - For reactive programming
- **OpenWeatherMap API** - Free weather data API
- **CSS3** - Modern styling with gradients and animations

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/TPilate/testaugustin.git
cd testaugustin
```

2. Install dependencies:
```bash
npm install
```

3. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api):
   - Sign up for a free account
   - Go to API keys section
   - Generate a new API key

4. Update the API key in `src/app/services/weather.ts`:
```typescript
private apiKey = 'YOUR_API_KEY_HERE'; // Replace with your actual API key
```

## Running the Application

Start the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any source files.

## Building for Production

Build the project:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Usage

1. Enter a city name in the search input field
2. Click the "Search" button or press Enter
3. View the current weather information including:
   - Current temperature in Celsius
   - Weather condition with icon
   - Feels like temperature
   - Humidity percentage
   - Wind speed in m/s
   - Atmospheric pressure in hPa

## Project Structure

```
testaugustin/
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   └── weather.ts          # Weather service for API calls
│   │   ├── app.ts                  # Main app component
│   │   ├── app.html                # App template
│   │   ├── app.css                 # App styles
│   │   ├── app.config.ts           # App configuration
│   │   └── app.routes.ts           # App routes
│   ├── index.html                  # Main HTML file
│   ├── main.ts                     # Application entry point
│   └── styles.css                  # Global styles
├── public/                         # Static assets
├── angular.json                    # Angular CLI configuration
├── package.json                    # Project dependencies
└── tsconfig.json                   # TypeScript configuration
```

## API Information

This app uses the **OpenWeatherMap API** which offers:
- Free tier with 1,000 API calls per day
- Current weather data for any location
- Weather data updated every 10 minutes

**API Endpoint:** `https://api.openweathermap.org/data/2.5/weather`

## Screenshots

### Initial State
![Initial State](https://github.com/user-attachments/assets/561aa564-2cfd-4bb9-8e54-010a1d0d92f3)

### Error Handling
![Error State](https://github.com/user-attachments/assets/63d344aa-da4b-40bb-be5e-b16177359db5)

## Features to Add (Future Enhancements)

- 5-day weather forecast
- Geolocation support to detect user's location
- Multiple city comparison
- Weather history and trends
- Temperature unit conversion (Celsius/Fahrenheit)
- Dark mode theme
- Favorite cities list
- Weather alerts and notifications

## License

This project is open source and available under the MIT License.

## Contributing

Contributions, issues, and feature requests are welcome!

## Author

Built with ❤️ using Angular 20.3
