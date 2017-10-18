import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlantMapDashboardService } from '../../../services/plant-map-dashboard.service';

@Component({
  selector: 'app-plant-detail-view',
  templateUrl: './plant-detail-view.component.html',
  styleUrls: ['./plant-detail-view.component.scss']
})
export class PlantDetailViewComponent implements OnInit {

  private plant: any;

  private isBatchSelected: boolean;

  constructor(
    private router: Router,
    private dashboardService: PlantMapDashboardService
  ) { }

  ngOnInit() {
    this.isBatchSelected = false;
    this.dashboardService.plantSelectedEvent.subscribe(
      plant => {
        this.plant = plant;
        console.log(plant);
      }
    );
  }

  selectBatch(item) {
    this.isBatchSelected = true;
    console.log(item);
  }

  goToMiq() {
    this.router.navigate(['miq']);
  }

}
