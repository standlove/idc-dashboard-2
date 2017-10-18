import { Component, OnInit } from '@angular/core';
import { MiqViewService } from '../../../services/miq-view.service';
import { Router } from '@angular/router';
import { QuadrantService } from '../../../services/quadrant.service';

@Component({
  selector: 'app-miq-view',
  templateUrl: './miq-view.component.html',
  styleUrls: ['./miq-view.component.scss']
})
export class MiqViewComponent implements OnInit {

  private isLineChart= true;
  private miqData: any;

  private isDaily: boolean;
  private isWeekly: boolean;
  private isMonthly: boolean;

  private isLoadedMiqDashBoard: boolean;

  // lineChart
  public chartData: any[] = [{data : []}];
  public chartLabels: any[] = [];

  public lineChartOptions: any = {
    responsive: true
  };

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public lineChartColors: Array<any> = [
    {
      // grey
      // backgroundColor: 'rgba(148,159,177,0.2)',
      // borderColor: 'rgba(148,159,177,1)',
      // pointBackgroundColor: 'rgba(148,159,177,1)',
      // pointBorderColor: '#fff',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public chartLegend = false;
  public lineChartType = 'line';
  public barChartType = 'bar';

  constructor(
    private router: Router,
    private quadrantService: QuadrantService,
    private miqViewService: MiqViewService
  ) {
    this.isDaily = true;
    this.isWeekly = false;
    this.isMonthly = false;
   }

    ngOnInit() {
      if (this.miqViewService.MiqData) {
        this.loadData(this.miqViewService.MiqData);
      }else {
        this.miqViewService.miqDataLoadEvent.subscribe(
          miqData => {
              this.loadData(miqData);
          }
        );
      }

      this.quadrantService.miqLoadEvent.subscribe(
         isLoaded => {
           console.log(isLoaded);
           this.isLoadedMiqDashBoard = isLoaded;
         }
      );
    }


    private loadData(miqData: any) {
        this.miqData = miqData;
        const data: any = [];
        this.miqData.graphData.daily.forEach(element => {
          data.push(Number(element.batchYield.value));
          this.chartLabels.push(element.date);
        });
        this.chartData = [{ data: data }];
    }

  // events
  public chartClicked(e: any): void {
    console.log(e);
    this.router.navigate(['quadrant']);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  showDailyChart() {
    this.isDaily = true;
    this.isWeekly = false;
    this.isMonthly = false;
    const data: any = [];
    this.chartLabels.length = 0;
    this.miqData.graphData.daily.forEach(element => {
      data.push(Number(element.batchYield.value));
      this.chartLabels.push(element.date);
    });
    this.chartData = [{data: data}];
  }
  showWeeklyChart() {
    this.isDaily = false;
    this.isWeekly = true;
    this.isMonthly = false;
    const data: any = [];
    this.chartLabels.length = 0;
    this.miqData.graphData.weekly.forEach(element => {
      data.push(Number(element.batchYield.value));
      this.chartLabels.push(element.week);
    });
    this.chartData = [{data: data}];
  }
  showMonthlyChart() {
    this.isDaily = false;
    this.isWeekly = false;
    this.isMonthly = true;
    const data: any = [];
    this.chartLabels.length = 0;
    this.miqData.graphData.monthly.forEach(element => {
      data.push(Number(element.batchYield.value));
      this.chartLabels.push(element.month);
    });
    this.chartData = [{data: data}];
  }

  maximize() {
    this.router.navigate(['quadrant-max']);
    this.quadrantService.MaxType = 'MIQ';
  }

}
