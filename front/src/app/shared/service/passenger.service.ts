import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Passenger } from '../models/passenger.model';

@Injectable()
export class PassengerService {
  selectedPassenger: Passenger;
  passengers: Passenger[];
  readonly baseURL = 'http://localhost:3000/passengers';

  constructor(private http: HttpClient) { }

  postPassenger(passenger: Passenger) {
    return this.http.post(this.baseURL, passenger);
  }

  getPassengerList() {
    return this.http.get(this.baseURL);
  }

  putPassenger(passenger: Passenger) {
    return this.http.put(this.baseURL + `/${passenger._id}`, passenger);
  }

  deletePassenger(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
