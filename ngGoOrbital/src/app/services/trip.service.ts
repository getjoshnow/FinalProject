<<<<<<< HEAD
import { AuthService } from 'src/app/services/auth.service';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Trip } from '../models/trip';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private authServ: AuthService
  ) {}
  private url = environment.baseUrl + 'api/trip';

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url).pipe(
      tap(_ => this.log('fetched trips')),
      catchError(this.handleError<Trip[]>('getTrips', []))
    );
  }

  /** GET trip by id. Return `undefined` when id not found */
  getTripNo404<Data>(id: number): Observable<Trip> {
    const url = `${this.url}/?id=${id}`;
    return this.http.get<Trip[]>(url).pipe(
      map(trips => trips[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} trip id=${id}`);
      }),
      catchError(this.handleError<Trip>(`getTrip id=${id}`))
    );
  }

  /** GET trip by id. Will 404 if id not found */
  getTrip(id: number): Observable<Trip> {
    const url = `${this.url}/${id}`;
    return this.http.get<Trip>(url).pipe(
      tap(_ => this.log(`fetched trip id=${id}`)),
      catchError(this.handleError<Trip>(`getTrip id=${id}`))
    );
  }

  /* GET trips whose name contains search term */
  searchTrips(term: string): Observable<Trip[]> {
    if (!term.trim()) {
      // if not search term, return empty trip array.
      return of([]);
    }
    return this.http.get<Trip[]>(`${this.url}/destination/dest=${term}`).pipe(
      tap(_ => this.log(`found trips matching "${term}"`)),
      catchError(this.handleError<Trip[]>('searchTrips', []))
    );
  }

  getTripsByCompanyId(id: number): Observable<Trip[]> {
    const url = `${this.url}/companies/${id}`;
    return this.http.get<Trip[]>(url).pipe(
      tap(_ => this.log(`fetched trips Companies id=${id}`)),
      catchError(this.handleError<Trip[]>(`get trips by Companies id=${id}`))
    );
  }


  //////// Save methods //////////

  /** POST: add a new trip to the server */
  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.url, trip, this.httpOptions()).pipe(
      tap((newTrip: Trip) => this.log(`added trip w/ id=${newTrip.id}`)),
      catchError(this.handleError<Trip>('addTrip'))
    );
  }

  /** DELETE: delete the trip from the server */
  deleteTrip(trip: Trip | number): Observable<Trip> {
    const id = typeof trip === 'number' ? trip : trip.id;
    const url = `${this.url}/${id}`;
    return this.http.delete<Trip>(url, this.httpOptions()).pipe(
      tap(_ => this.log(`deleted trip id=${id}`)),
      catchError(this.handleError<Trip>('deleteTrip'))
    );
  }

  /** PUT: update the trip on the server */
  updateTrip(trip: Trip): Observable<any> {
    return this.http.put(this.url, trip, this.httpOptions()).pipe(
      tap(_ => this.log(`updated trip id=${trip.id}`)),
      catchError(this.handleError<any>('updateTrip'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a TripService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TripService: ${message}`);
  }

  private httpOptions() {
    const cred = this.authServ.getCredentials();
    return {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: cred
      }
    };
  }
}
=======
import { AuthService } from 'src/app/services/auth.service';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Trip } from '../models/trip';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private authServ: AuthService
  ) {}
  private url = environment.baseUrl + 'api/trip';

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url).pipe(
      tap(_ => this.log('fetched trips')),
      catchError(this.handleError<Trip[]>('getTrips', []))
    );
  }

  /** GET trip by id. Return `undefined` when id not found */
  getTripNo404<Data>(id: number): Observable<Trip> {
    const url = `${this.url}/?id=${id}`;
    return this.http.get<Trip[]>(url).pipe(
      map(trips => trips[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} trip id=${id}`);
      }),
      catchError(this.handleError<Trip>(`getTrip id=${id}`))
    );
  }

  /** GET trip by id. Will 404 if id not found */
  getTrip(id: number): Observable<Trip> {
    const url = `${this.url}/${id}`;
    return this.http.get<Trip>(url).pipe(
      tap(_ => this.log(`fetched trip id=${id}`)),
      catchError(this.handleError<Trip>(`getTrip id=${id}`))
    );
  }

  /* GET trips whose dest contains search term */
  searchTrips(term: string): Observable<Trip[]> {
    // if (!term.trim()) {
    //   // if not search term, return empty trip array.
    //   return of([]);
    // }
    return this.http.get<Trip[]>(`${this.url}/destination/dest=${term}`).pipe(
      tap(_ => this.log(`found trips matching "${term}"`)),
      catchError(this.handleError<Trip[]>('searchTrips', []))
    );
  }

  getTripsByCompanyId(id: number): Observable<Trip[]> {
    const url = `${this.url}/companies/${id}`;
    return this.http.get<Trip[]>(url).pipe(
      tap(_ => this.log(`fetched trips Companies id=${id}`)),
      catchError(this.handleError<Trip[]>(`get trips by Companies id=${id}`))
    );
  }


  //////// Save methods //////////

  /** POST: add a new trip to the server */
  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.url, trip, this.httpOptions()).pipe(
      tap((newTrip: Trip) => this.log(`added trip w/ id=${newTrip.id}`)),
      catchError(this.handleError<Trip>('addTrip'))
    );
  }

  /** DELETE: delete the trip from the server */
  deleteTrip(trip: Trip | number): Observable<Trip> {
    const id = typeof trip === 'number' ? trip : trip.id;
    const url = `${this.url}/${id}`;
    return this.http.delete<Trip>(url, this.httpOptions()).pipe(
      tap(_ => this.log(`deleted trip id=${id}`)),
      catchError(this.handleError<Trip>('deleteTrip'))
    );
  }

  /** PUT: update the trip on the server */
  updateTrip(trip: Trip): Observable<any> {
    return this.http.put(this.url, trip, this.httpOptions()).pipe(
      tap(_ => this.log(`updated trip id=${trip.id}`)),
      catchError(this.handleError<any>('updateTrip'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a TripService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TripService: ${message}`);
  }

  private httpOptions() {
    const cred = this.authServ.getCredentials();
    return {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: cred
      }
    };
  }
}
>>>>>>> 1c22dabc0e29bda0bdd18b77eba412dcf653c7eb
