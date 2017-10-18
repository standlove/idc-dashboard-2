import { Component, OnInit } from '@angular/core';
import { PlantMapDashboardService } from '../../services/plant-map-dashboard.service';
import { AppDataService } from '../../services/app-data.service';
import { MiqViewService } from '../../services/miq-view.service';
import { QuadrantService } from '../../services/quadrant.service';

@Component({
  selector: 'app-miq-view-dashboard',
  templateUrl: './miq-view-dashboard.component.html',
  styleUrls: ['./miq-view-dashboard.component.scss']
})
export class MiqViewDashboardComponent implements OnInit {

  private miqData: any;
  constructor(
    private appDataService: AppDataService,
    private quadrantService: QuadrantService,
    private miqViewService: MiqViewService,
    private dashboardService: PlantMapDashboardService
  ) {
  }

  ngOnInit() {
    console.log('miq');
    this.dashboardService.NavBarTitle = 'MIQ View Dashboard';

    this.appDataService.getMiqData().subscribe(
      miqData => {
      this.miqViewService.MiqData = miqData;
      this.quadrantService.IsOnMIQView = true;
      }
    );
    this.miqViewService.miqDataLoadEvent.subscribe(
      miqData => {
        this.miqData = miqData;
        console.log(this.miqData);
      }
    );
  }

}
