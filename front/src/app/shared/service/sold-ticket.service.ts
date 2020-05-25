import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SoldTicket} from "../models/sold-ticket";

@Injectable({
  providedIn: 'root'
})
export class SoldTicketService {
  selectedSoldTicket: SoldTicket;
  soldTickets: SoldTicket[];
  readonly baseURL = 'http://localhost:3000/soldTickets';


  constructor(private http: HttpClient) { }

  postSoldTicket(soldTicket: SoldTicket) {
    return this.http.post(this.baseURL, soldTicket);
  }

  getSoldTicketList() {
    return this.http.get(this.baseURL);
  }

  putSoldTicket(soldTicket: SoldTicket) {
    return this.http.put(this.baseURL + `/${soldTicket._id}`, soldTicket);
  }

  deleteSoldTicket(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
