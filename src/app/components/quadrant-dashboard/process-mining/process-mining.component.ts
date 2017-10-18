import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuadrantService } from '../../../services/quadrant.service';
import { AppDataService } from '../../../services/app-data.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import { MatPaginator, MatSort } from '@angular/material';
@Component({
  selector: 'app-process-mining',
  templateUrl: './process-mining.component.html',
  styleUrls: ['./process-mining.component.scss']
})
export class ProcessMiningComponent implements OnInit {

  private isPMView: boolean;
  private isRankList: boolean;
  private processMiningData: any;

  displayedColumns = ['productId', 'stepId', 'vesselId', 'caseId', 'paramName', 'paramRank', 'paramValue'];
  dataSource: RankListDatasource | null;

  constructor(
    private quadrantService: QuadrantService,
    private appDataService: AppDataService,
    private router: Router
  ) {
    this.isPMView = true;
    this.isRankList = false;
   }

  ngOnInit() {
    this.appDataService.getProcessMiningData().subscribe(
      res => {
        this.quadrantService.ProcessMiningData = res;
        this.processMiningData = res;
        console.log(this.processMiningData);
        this.dataSource = new RankListDatasource(this.quadrantService);
      }, err => {
        console.log(err);
      }
    );
  }

  showProcessMining() {
    this.isPMView = true;
    this.isRankList = false;
  }

  showRankList() {
    this.isPMView = false;
    this.isRankList = true;
  }

  maximize() {
    this.router.navigate(['quadrant-max']);
    this.quadrantService.MaxType = 'PM';
  }
}



export class RankListDatasource extends DataSource < any > {
  constructor(
    private quadrantService: QuadrantService) {
    super();
  }

  subject: BehaviorSubject < any[] > = new BehaviorSubject < any[] > ([]);

  connect(): Observable<any[]> {
    return Observable.of(this.quadrantService.ProcessMiningData.rankList);
  }

  disconnect() {
    this
      .subject
      .complete();
    this.subject.observers = [];
  }
}

