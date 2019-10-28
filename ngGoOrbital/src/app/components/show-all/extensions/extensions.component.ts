import { Component } from '@angular/core';
import { MatCard } from '@angular/material';
import { TripService } from '../../../services/trip.service';


@Component({
  selector: 'app-extensions',
  templateUrl: './extensions.component.html',
  styleUrls: ['./extensions.component.css']
})
export class ExtensionsComponent {
  checked = false;
  excursion2 = false;
  disabled = false;

  constructor(private tripService: TripService) { }

  addExcursion(cost: number){
    this.tripService.CurrentTripCost += cost;
  }
}
