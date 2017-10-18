import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuadrantService } from '../../../services/quadrant.service';
import { AppDataService } from '../../../services/app-data.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import { MatPaginator, MatSort } from '@angular/material';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  private notificationData: any;
  private messageForm: any;

  displayedColumns = ['product', 'stepId', 'Observation'];
  dataSource: NotificationDatasource | null;

  closeResult: string;

  private messageModel: any;
  private messageSubmit: boolean;
  private showSuccessMessage: boolean;

  constructor(
    private quadrantService: QuadrantService,
    private appDataService: AppDataService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.messageSubmit = false;
    this.messageModel = {

    };
  }

  ngOnInit() {
    this.appDataService.getNotificationData().subscribe(
      res => {
        this.quadrantService.NotificationData = res;
        this.notificationData = res;
        console.log(this.notificationData);

        this.dataSource = new NotificationDatasource(this.quadrantService);
      }, err => {
        console.log(err);
      }
    );

    // this.messageForm = new FormGroup({
    //   'name': new FormControl(null, [ Validators.required]),
    //   'phoneNumber': new FormControl(null, [ Validators.required]),
    //   'content': new FormControl(null, [ Validators.required])
    // });
  }

  openSendMessageModal(content) {
    this.showSuccessMessage = false;
    this.messageSubmit = false;
    this.messageModel = { };
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  maximize() {
    this.router.navigate(['quadrant-max']);
    this.quadrantService.MaxType = 'NA';
  }

  onSubmit(form) {
    this.messageSubmit = true;
    console.log(form);
    if ( form.valid ) {
      this.showSuccessMessage = true;
    }

  }
}


export class NotificationDatasource extends DataSource < any > {
  constructor(
    private quadrantService: QuadrantService) {
    super();
  }

  subject: BehaviorSubject < any[] > = new BehaviorSubject < any[] > ([]);

  connect(): Observable<any[]> {
    return Observable.of(this.quadrantService.NotificationData);
  }

  disconnect() {
    this
      .subject
      .complete();
    this.subject.observers = [];
  }
}
