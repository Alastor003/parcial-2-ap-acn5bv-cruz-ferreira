import { Component } from '@angular/core';
import { TouristPointsService } from '../services/tourist-points.service';

@Component({
  selector: 'app-tourist-points',
  templateUrl: './tourist-points.component.html',
  styleUrls: ['./tourist-points.component.css']
})
export class TouristPointsComponent {
  pointName: string = '';
  location: string = '';

  constructor(private touristPointsService: TouristPointsService) {}

  addPoint() {
    this.touristPointsService.createPoint({ name: this.pointName, location: this.location }).subscribe(response => {
      console.log('Tourist point created', response);
    });
  }
}
