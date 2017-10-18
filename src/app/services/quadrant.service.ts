import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class QuadrantService {

  private _maxType: any;
  private _isOnMIQView: boolean;
  private _desicionTreeData: any;
  private _processMiningData: any;
  private _notificationData: any;

  public maximizeEvent = new Subject<any>();
  public miqLoadEvent = new Subject<any>();
  public dtDataLoadEvent = new Subject<any>();
  public pmDataLoadEvent = new Subject<any>();
  public naDataLoadEvent = new Subject<any>();

  constructor() { }

  get IsOnMIQView(){
    return this._isOnMIQView;
  }

  set IsOnMIQView(isOnMIQView){
    this._isOnMIQView = isOnMIQView;
    this.miqLoadEvent.next(isOnMIQView);
  }

  get MaxType(){
    return this._maxType;
  }

  set MaxType(maxType){
      console.log(maxType);
    this._maxType = maxType;
    this.maximizeEvent.next(maxType);
  }

  get DesicionTreeData(){
    return this._desicionTreeData;
  }

  set DesicionTreeData(desicionTreeData){
    this._desicionTreeData = desicionTreeData;
    this.dtDataLoadEvent.next(desicionTreeData);
  }

  get ProcessMiningData(){
    return this._processMiningData;
  }

  set ProcessMiningData(processMiningData){
    this._processMiningData = processMiningData;
    this.pmDataLoadEvent.next(processMiningData);
  }

  get NotificationData(){
    return this._notificationData;
  }

  set NotificationData(notificationData){
    this._notificationData = notificationData;
    this.naDataLoadEvent.next(notificationData);
  }

}
