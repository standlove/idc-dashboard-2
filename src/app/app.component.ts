import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppDataService } from './services/app-data.service';
import { MiqViewService } from './services/miq-view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private appDataService: AppDataService,
    private miqViewService: MiqViewService
  ) {
    this.appDataService.getMiqData().subscribe(
      miqData => {
      this.miqViewService.MiqData = miqData;
      }
    );
  }

}
