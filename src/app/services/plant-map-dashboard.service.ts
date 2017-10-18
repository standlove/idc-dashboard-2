import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class PlantMapDashboardService {

  private _plantsData: any;
  private _selectedPlant: any;
  private _navBarTitle: any;

  public plantSelectedEvent = new Subject<any>();
  public plantLoadedEvent = new Subject<any>();
  public routingChangedEvent = new Subject<any>();

  get PlantData(){
    return this._plantsData;
  }

  set PlantData(plantsData){
    this._plantsData = plantsData;
    this.plantLoadedEvent.next(plantsData);
  }

  get SelectedPlant(){
    return this._selectedPlant;
  }

  set SelectedPlant(selectedPlant){
    this._selectedPlant = selectedPlant;
    this.plantSelectedEvent.next(selectedPlant);
  }

  set NavBarTitle(navBarTitle){
    this._navBarTitle = navBarTitle;
    this.routingChangedEvent.next(navBarTitle);
  }

  get NavBarTitle(){
    return this._navBarTitle;
  }

  constructor() {}

}
