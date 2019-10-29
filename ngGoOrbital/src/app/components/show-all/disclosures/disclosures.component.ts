import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-disclosures',
  templateUrl: './disclosures.component.html',
  styleUrls: ['./disclosures.component.css']
})
export class DisclosuresComponent implements OnInit{

  ngOnInit(): void { }

constructor(private tripservice: TripService) { }

     description = this.tripservice.CurrentTrip.description;
  panelOpenState = false;

}
