import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MetricCardComponent } from '../../shared/metric-card/metric-card.component';
import { WeatherService } from '../../core/weather.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //city = 'London';
  //weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    // this.weatherService.getWeather('New York').subscribe(data => {
    //   console.log('Weather:', data);
    // });
   // this.fetchWeather();
  }
  

  // fetchWeather() {
  //   this.weatherService.getWeather(this.city).subscribe(data => {
  //     this.weatherData = data;
  //   });
  // }
}
