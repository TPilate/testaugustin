import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Weather, WeatherData } from './services/weather';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('weather-app');
  
  cityName: string = '';
  weather: WeatherData | null = null;
  loading: boolean = false;
  error: string = '';

  constructor(private weatherService: Weather) {}

  searchWeather(): void {
    if (!this.cityName.trim()) {
      this.error = 'Please enter a city name';
      return;
    }

    this.loading = true;
    this.error = '';
    this.weather = null;

    this.weatherService.getWeatherByCity(this.cityName).subscribe({
      next: (data) => {
        this.weather = data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        if (err.status === 404) {
          this.error = 'City not found. Please try another city.';
        } else if (err.status === 401) {
          this.error = 'Invalid API key. Please configure a valid OpenWeatherMap API key.';
        } else {
          this.error = 'Failed to fetch weather data. Please try again.';
        }
      }
    });
  }
}
