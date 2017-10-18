import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import { MatPaginator, MatSort } from '@angular/material';
import { PlantMapDashboardService } from '../../../services/plant-map-dashboard.service';

@Component({
  selector: 'app-plant-list-view',
  templateUrl: './plant-list-view.component.html',
  styleUrls: ['./plant-list-view.component.scss']
})

export class PlantListViewComponent implements OnInit, AfterViewInit {

  displayedColumns = ['plantName', 'region', 'yield'];
  dataSource: PlantsDatasource | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('table') sort: MatSort;

  constructor(private dashboardService: PlantMapDashboardService) {}

  ngOnInit() {
    console.log(this.sort);
    this.dataSource = new PlantsDatasource(this.dashboardService, this.sort, this.paginator);
  }

  ngAfterViewInit(): void {

  }

}

export class PlantsDatasource extends DataSource < any > {
  constructor(
    private dashboardService: PlantMapDashboardService,
    private sort: MatSort,
    private paginator: MatPaginator) {
    super();
  }

  subject: BehaviorSubject < any[] > = new BehaviorSubject < any[] > ([]);

  connect(): Observable<any[]> {
    // const displayDataChanges = [
    //   this.subject,
    //   this.sort.sortChange,
    // ];

    // return Observable.merge(...displayDataChanges).map(() => {
    //   return this.getSortedData();
    // });
    return Observable.of(this.dashboardService.PlantData);
  }

   /** Returns a sorted copy of the database data. */
   getSortedData(): any[] {
    const data = this.dashboardService.PlantData.slice();
    if (!this.sort.active || this.sort.direction === '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';

      switch (this.sort.active) {
        case 'plantName': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'region': [propertyA, propertyB] = [a.name, b.name]; break;
        case 'yield': [propertyA, propertyB] = [a.progress, b.progress]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this.sort.direction === 'asc' ? 1 : -1);
    });
  }


  disconnect() {
    this
      .subject
      .complete();
    this.subject.observers = [];
  }
}
