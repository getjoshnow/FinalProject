import { Traveler } from 'src/app/models/traveler';
import { TravelerService } from 'src/app/services/traveler.service';
import { TripService } from './../../services/trip.service';
import { Component, OnInit, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Trip } from 'src/app/models/trip';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})

export class ShowAllComponent implements OnInit {
  trip: {};   // variable
  trips: any;  // array of variables;
  travelerLocal: Traveler;
  disableSelect = new FormControl(false);

  currentRate = 8;
  id: any;
  // this.trip = this.SampleData;

  // <a [routerLink]="['/search']">Search</a> |



  constructor(private route: ActivatedRoute,
              private tripService: TripService,
              private travelerService: TravelerService,
              private router: Router,
              private authServ: AuthService,
              private userServ: UserService) {

  }

  ngOnInit() {
    this.tripService.getTrip(1);
    this.id = this.route.snapshot.paramMap.get('id');
    this.getTraveler();
    this.trip = this.tripService.CurrentTrip;
    this.tripService.CurrentTripCost = 0;
  }
  getTraveler() {
    let user: User;
  }


  reload() {
    let user: User;
    const username = this.authServ.getLoggedInUserName();
    this.userServ.getUserByName(username).subscribe(
      good => {
        user = good;
      },
      bad => {
        console.error(bad);
      }
    );

    this.travelerService.getTraveler(user.id).subscribe(
      good => {
        this.travelerLocal = good;
      },
      bad => {
        console.error(bad)
      }
    );

  }


  // sets the local variables
  setTripValues(trip: Trip) {

  }
  getTrip(id: number): void {
    this.trip = this.tripService.getTrip(id)
      .subscribe(trip => this.trip = trip);
  }

  // links account id, but
  purchase() {
    if (confirm('Would You like to Purchase ' + this.trip)) {

      // get traveler
      this.travelerService.getTraveler(1).subscribe(travelerLocal => this.travelerLocal = travelerLocal);

      // update traveler
      this.travelerLocal.trips.push(this.trip);

      // post traveler
      this.travelerService.updateTraveler(this.travelerLocal);

      console.log('*******************************purchase() id = ' + this.trip);

      this.router.navigateByUrl('../traveler');
    }
    // route to account page
  }


  /** GET trip by id. Return `undefined` when id not found */
  getTrip1(id: number): void {
    this.tripService.getTrip(1).subscribe(trip => this.trip = trip);
  }
}
