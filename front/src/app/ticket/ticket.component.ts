import { Component, OnInit } from '@angular/core';
import {TicketService} from "../shared/service/ticket.service";
import {FormBuilder, NgForm} from "@angular/forms";
import {Train} from "../shared/models/train";
import {Ticket} from "../shared/models/ticket";
import {TrainService} from "../shared/service/train.service";

declare var M: any;

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  providers: [TicketService, TrainService]
})




export class TicketComponent implements OnInit {

  constructor(public ticketService: TicketService, public trainService: TrainService/*, private fb: FormBuilder*/) { }

  ngOnInit() {
    this.resetForm();
    this.refreshTicketList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.ticketService.selectedTicket = {
      _id: "",
      place: null,
      price: null,
      train: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.ticketService.postTicket(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshTicketList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.ticketService.putTicket(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshTicketList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshTicketList() {
    this.ticketService.getTicketList().subscribe((res) => {
      this.ticketService.tickets = res as Ticket[];
    });
  }

  onEdit(ticket: Ticket) {
    this.ticketService.selectedTicket = ticket;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.ticketService.deleteTicket(_id).subscribe((res) => {
        this.refreshTicketList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
