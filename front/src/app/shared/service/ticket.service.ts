import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ticket} from "../models/ticket";


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  selectedTicket: Ticket;
  tickets: Ticket[];
  readonly baseURL = 'http://localhost:3000/tickets';

  constructor(private http: HttpClient) { }

  postTicket(ticket: Ticket) {
    return this.http.post(this.baseURL, ticket);
  }

  getTicketList() {
    return this.http.get(this.baseURL);
  }

  putTicket(ticket: Ticket) {
    return this.http.put(this.baseURL + `/${ticket._id}`, ticket);
  }

  deleteTicket(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
