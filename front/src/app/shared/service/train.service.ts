import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Train } from '../models/train';

@Injectable()
export class TrainService {
  selectTrain: Train;
  trains: Train[];
  readonly baseURL = 'http://localhost:3000/trains';

  constructor(private http: HttpClient) { }

  postTrain(train: Train) {
    return this.http.post(this.baseURL, train);
  }

  getTrainList() {
    return this.http.get(this.baseURL);
  }

  putTrain(train: Train) {
    return this.http.put(this.baseURL + `/${train._id}`, train);
  }

  deleteTrain(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}

