import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MiqViewService {

  private _miqData: any;

  public miqDataLoadEvent = new Subject<any>();

  constructor() { }

  get MiqData(){
    return this._miqData;
  }

  set MiqData(miqData){
    this._miqData = miqData;
    this.miqDataLoadEvent.next(miqData);
  }

}
