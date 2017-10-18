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
  selector: 'app-decision-tree',
  templateUrl: './decision-tree.component.html',
  styleUrls: ['./decision-tree.component.scss']
})
export class DecisionTreeComponent implements OnInit {

  private isShowVariableRank: boolean;
  private isShowRules: boolean;
  private isShowDecisionTree: boolean;

  private desicionTreeData: any;

  vrDisplayedColumns = ['rank', 'paramName', 'dtValue', 'variableValue'];
  vrDataSource: VariableRankDatasource | null;

  rulesDisplayedColumns = ['frRanking', 'rule', 'probability'];
  rulesDataSource: RulesDatasource | null;

  // displayedColumns = ['rank', 'paramName', 'dtValue', 'variableValue'];
  // dataSource: DecisionTreeDatasource | null;

  constructor(
    private quadrantService: QuadrantService,
    private appDataService: AppDataService,
    private router: Router
  ) {
    this.isShowVariableRank = true;
    this.isShowRules = false;
    this.isShowDecisionTree = false;
  }

  ngOnInit() {
    this.appDataService.getDecisionTreeData().subscribe(
      res => {
        this.quadrantService.DesicionTreeData = res;
        this.desicionTreeData = res;
        console.log(this.desicionTreeData);

        this.vrDataSource = new VariableRankDatasource(this.quadrantService);
        this.rulesDataSource = new RulesDatasource(this.quadrantService);
      }, err => {
        console.log(err);
      }
    );
  }

  maximize() {
    this.router.navigate(['quadrant-max']);
    this.quadrantService.MaxType = 'DT';
  }

  showVariableRank() {
    this.isShowVariableRank = true;
    this.isShowRules = false;
    this.isShowDecisionTree = false;
  }

  showRules() {
    this.isShowVariableRank = false;
    this.isShowRules = true;
    this.isShowDecisionTree = false;
  }
   showDecisionTree() {
    this.isShowVariableRank = false;
    this.isShowRules = false;
    this.isShowDecisionTree = true;
   }

}


export class VariableRankDatasource extends DataSource < any > {
  constructor(
    private quadrantService: QuadrantService) {
    super();
  }

  subject: BehaviorSubject < any[] > = new BehaviorSubject < any[] > ([]);

  connect(): Observable<any[]> {
    return Observable.of(this.quadrantService.DesicionTreeData.variableRank);
  }

  disconnect() {
    this
      .subject
      .complete();
    this.subject.observers = [];
  }
}

export class RulesDatasource extends DataSource < any > {
  constructor(
    private quadrantService: QuadrantService) {
    super();
  }

  subject: BehaviorSubject < any[] > = new BehaviorSubject < any[] > ([]);

  connect(): Observable<any[]> {
    return Observable.of(this.quadrantService.DesicionTreeData.rules);
  }

  disconnect() {
    this
      .subject
      .complete();
    this.subject.observers = [];
  }
}

export class DecisionTreeDatasource extends DataSource < any > {
  constructor(
    private quadrantService: QuadrantService) {
    super();
  }

  subject: BehaviorSubject < any[] > = new BehaviorSubject < any[] > ([]);

  connect(): Observable<any[]> {
    return Observable.of(this.quadrantService.DesicionTreeData.variableRank);
  }

  disconnect() {
    this
      .subject
      .complete();
    this.subject.observers = [];
  }
}
