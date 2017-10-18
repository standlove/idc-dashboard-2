import { Component, OnInit } from '@angular/core';
import { QuadrantService } from '../../services/quadrant.service';
import { PlantMapDashboardService } from '../../services/plant-map-dashboard.service';

@Component({
  selector: 'app-quadrant-dashboard',
  templateUrl: './quadrant-dashboard.component.html',
  styleUrls: ['./quadrant-dashboard.component.scss']
})
export class QuadrantDashboardComponent implements OnInit {

  constructor(
    private dashboardService: PlantMapDashboardService,
    private quadrantService: QuadrantService
  ) { }

  ngOnInit() {
    this.quadrantService.IsOnMIQView = false;
    this.dashboardService.NavBarTitle = 'Dashboard';
  }

}
