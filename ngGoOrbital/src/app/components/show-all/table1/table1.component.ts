import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/services/trip.service';
import { MatTableModule } from '@angular/material/table';

// tslint:disable-next-line:class-name
export interface tripTable {
  name: string;
  destination: string;
  length: string;
  total: string;
}

// const ELEMENT_DATA: tripTable[] = [
//   { name: this.trip.title, destination: this.trip.destination, length: this.trip.length, total: this.getCost() }
// ];


const ELEMENT_DATA: tripTable[] = [
  { name: 'dave', destination: 'fjdkf', length: 'adf', total: 'adfsf' }
];

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
 export class Table1Component {

  constructor(private tripService: TripService) { }
  trip: any;


displayedColumns: string[] = ['name', 'destination', 'length', 'total'];

  dataSource = this.tripService.CurrentTrip;

  // ngOnInit(): void {

  //   let trip = this.tripService.CurrentTrip;

  // }

getCost(): number {
  return this.trip.cost + this.tripService.CurrentTripCost;
}

}
