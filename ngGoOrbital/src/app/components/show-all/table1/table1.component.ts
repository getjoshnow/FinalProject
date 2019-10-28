import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component {

  trip = {
    "id": 1,
    "title": "View The Horizon Experience",
    "destination": "Lower Earth Orbit",
    "cost": 15000,
    "length": 1,
    "date": null,
    "photoUrl": null
  };

  constructor(private tripService: TripService) { }

  getCost(): number {
    return this.trip.cost + this.tripService.CurrentTripCost;
  }
}
