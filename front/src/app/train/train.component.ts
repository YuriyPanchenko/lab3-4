import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {TrainService} from '../shared/service/train.service';
import {Train} from '../shared/models/train';

declare var M: any;

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css'],
  providers: [TrainService]
})

export class TrainComponent implements OnInit {

  constructor(public trainService: TrainService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshTrainList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.trainService.selectTrain = {
      _id: "",
      direction: "",
      departureTime: "",
      arrivalTime: "",
      places: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.trainService.postTrain(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshTrainList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.trainService.putTrain(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshTrainList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshTrainList() {
    this.trainService.getTrainList().subscribe((res) => {
      this.trainService.trains = res as Train[];
    });
  }

  onEdit(train: Train) {
    this.trainService.selectTrain = train;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.trainService.deleteTrain(_id).subscribe((res) => {
        this.refreshTrainList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}

