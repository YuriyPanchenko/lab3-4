import {Ticket} from "./ticket";
import {Passenger} from "./passenger.model";

export class SoldTicket {
  _id: string;
  ticket: Ticket;
  passenger: Passenger;
}
