import { Component, OnInit, ElementRef } from '@angular/core';
import { PlantMapDashboardService } from '../../services/plant-map-dashboard.service';

@Component({
  selector: 'app-plant-map-dashboard',
  templateUrl: './plant-map-dashboard.component.html',
  styleUrls: ['./plant-map-dashboard.component.scss']
})
export class PlantMapDashboardComponent implements OnInit {
  private isMapView: boolean;
  private isDisplayDetPanel: boolean;
  private isDetailPanelOpen: boolean;
  constructor(
    private elRef: ElementRef,
    private dashboardService: PlantMapDashboardService
  ) {
    this.isMapView = true;
    this.isDetailPanelOpen = false;
  }

  ngOnInit() {
    this.dashboardService.plantSelectedEvent.subscribe(
      res => {
        // this.openNav();
        this.isDisplayDetPanel = true;
      }
    );
    this.dashboardService.NavBarTitle = 'Plant Selection';
  }

  openNav() {
    // if (!this.isDetailPanelOpen) {
      this.isDetailPanelOpen = true;
      document.getElementById('right-panel').style.width = '300px';
      this.elRef.nativeElement.querySelector('.off-canvas-panel-ani').style.marginRight = '300px';
    // } else {
      // this.closeNav();
    // }
  }

  closeNav() {
    this.isDetailPanelOpen = false;
    document.getElementById('right-panel').style.width = '0';
    this.elRef.nativeElement.querySelector('.off-canvas-panel-ani').style.marginRight = '0';
  }

}
