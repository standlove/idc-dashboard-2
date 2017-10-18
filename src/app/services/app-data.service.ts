import { Injectable } from '@angular/core';
import {Http, Headers, Response, Jsonp, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppDataService {

  constructor(private http: Http) {}

  getPlantData = (): Observable < Response > => {
    return this
      .http
      .get('assets/data/plant.json')
      .map(res => res.json());
  }

  getMiqData = (): Observable < Response > => {
    return this
      .http
      .get('assets/data/miq.json')
      .map(res => res.json());
  }

  getDecisionTreeData = (): Observable < Response > => {
    return this
      .http
      .get('assets/data/decisiontree.json')
      .map(res => res.json());
  }

  getProcessMiningData = (): Observable < Response > => {
    return this
      .http
      .get('assets/data/processmining.json')
      .map(res => res.json());
  }

  getNotificationData = (): Observable < Response > => {
    return this
      .http
      .get('assets/data/notification.json')
      .map(res => res.json());
  }
}
