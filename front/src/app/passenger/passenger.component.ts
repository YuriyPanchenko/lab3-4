import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PassengerService } from '../shared/service/passenger.service';
import {Passenger} from '../shared/models/passenger.model';

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css'],
  providers: [PassengerService]
})
export class PassengerComponent implements OnInit {

  constructor(public passengerService: PassengerService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshPassengerList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.passengerService.selectedPassenger = {
      _id: "",
      name: "",
      surname: "",
      passportNumber: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.passengerService.postPassenger(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPassengerList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.passengerService.putPassenger(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPassengerList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshPassengerList() {
    this.passengerService.getPassengerList().subscribe((res) => {
      this.passengerService.passengers = res as Passenger[];
    });
  }

  onEdit(passenger: Passenger) {
    this.passengerService.selectedPassenger = passenger;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.passengerService.deletePassenger(_id).subscribe((res) => {
        this.refreshPassengerList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
