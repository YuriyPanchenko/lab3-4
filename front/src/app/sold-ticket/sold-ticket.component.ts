import { Component, OnInit } from '@angular/core';
import {TicketService} from "../shared/service/ticket.service";
import {PassengerService} from "../shared/service/passenger.service";
import {SoldTicketService} from "../shared/service/sold-ticket.service";
import {NgForm} from "@angular/forms";
import {SoldTicket} from "../shared/models/sold-ticket";

declare var M: any;

@Component({
  selector: 'app-sold-ticket',
  templateUrl: './sold-ticket.component.html',
  styleUrls: ['./sold-ticket.component.css'],
  providers: [TicketService, PassengerService, SoldTicketService]
})
export class SoldTicketComponent implements OnInit {

  constructor(public ticketService: TicketService,
              public passengerService: PassengerService,
              public soldTicketService: SoldTicketService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshSoldTicketList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.soldTicketService.selectedSoldTicket = {
      _id: "",
      ticket: null,
      passenger: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.soldTicketService.postSoldTicket(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshSoldTicketList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.soldTicketService.putSoldTicket(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshSoldTicketList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshSoldTicketList() {
    this.soldTicketService.getSoldTicketList().subscribe((res) => {
      this.soldTicketService.soldTickets = res as SoldTicket[];
    });
  }

  onEdit(soldTicket: SoldTicket) {
    this.soldTicketService.selectedSoldTicket = soldTicket;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.soldTicketService.deleteSoldTicket(_id).subscribe((res) => {
        this.refreshSoldTicketList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
