import { Component, OnInit } from '@angular/core';
import { PlantMapDashboardService } from '../../services/plant-map-dashboard.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
// myControl: FormControl = new FormControl();
plantName: string;
plants: any[];

title: string;

selectedPlant: any;

public plantSelected(plant) {
  this.plantName = plant ? plant.plantName : 'none';
}
  constructor(
    private dashboardService: PlantMapDashboardService
  ) {
    this.title = 'Plant Selection';
  }

  ngOnInit() {
      this.dashboardService.plantLoadedEvent.subscribe(
        plants => {
          this.plants = plants;
          console.log(plants);
        }
      );

      this.dashboardService.routingChangedEvent.subscribe(
        title => {
          this.title = title;
        }
      );
  }

}
