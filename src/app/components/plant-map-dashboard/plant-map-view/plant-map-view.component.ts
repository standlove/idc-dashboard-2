import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../../../services/app-data.service';
import { PlantMapDashboardService } from '../../../services/plant-map-dashboard.service';
import { ControlPosition,
  MapTypeControlStyle,
  MapTypeId,
  FullscreenControlOptions,
  MapTypeControlOptions,
  ZoomControlStyle,
  ZoomControlOptions,
  ScaleControlOptions} from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-plant-map-view',
  templateUrl: './plant-map-view.component.html',
  styleUrls: ['./plant-map-view.component.scss']
})
export class PlantMapViewComponent implements OnInit {
  lat = 40;
  lng = 40;
  zoom = 2;
  zoomControlOptions: ZoomControlOptions = {
    position: ControlPosition.LEFT_BOTTOM,
    style: ZoomControlStyle.LARGE
  };

  scaleControlOptions: ScaleControlOptions = {

  };

  fullscreenControlOptions: FullscreenControlOptions = {
    position : ControlPosition.LEFT_BOTTOM
  };

  mapTypeControlOptions: MapTypeControlOptions = {
    mapTypeIds: [ MapTypeId.ROADMAP],
    position: ControlPosition.BOTTOM_LEFT,
  };

  private plants: any;
  constructor(
    private appDataService: AppDataService,
    private dashboardService: PlantMapDashboardService
  ) { }

  ngOnInit() {
    this.appDataService.getPlantData().subscribe(
      res => {
        this.dashboardService.PlantData = res;
        this.plants = res;
        console.log(this.plants);
      }, err => {
        console.log(err);
      }
    );
  }

  markerMouseOver(event, plant) {
    plant.isOpen = true;
    plant.isClicked = false;
  }

  mouseOut(event, plant) {
    if ( !plant.isClicked) {
      plant.isOpen = false;
    }
  }

  markerClick(event, plant) {
    plant.isClicked = true;
    this.dashboardService.SelectedPlant = plant;
  }

  afterCloseInfoWindow(event, plant) {
    plant.isClicked = false;
    plant.isOpen = false;
  }

}
