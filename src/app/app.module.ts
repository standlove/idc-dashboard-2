import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import 'hammerjs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [],
})
export class MaterialModule {}

import {CdkTableModule} from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { QuadrantDashboardComponent } from './components/quadrant-dashboard/quadrant-dashboard.component';
import { MiqViewDashboardComponent } from './components/miq-view-dashboard/miq-view-dashboard.component';
import { PlantMapDashboardComponent } from './components/plant-map-dashboard/plant-map-dashboard.component';
import { PlantListViewComponent } from './components/plant-map-dashboard/plant-list-view/plant-list-view.component';
import { PlantMapViewComponent } from './components/plant-map-dashboard/plant-map-view/plant-map-view.component';
import { PlantDetailViewComponent } from './components/plant-map-dashboard/plant-detail-view/plant-detail-view.component';
import { AppDataService } from './services/app-data.service';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GroupByPipe } from './pipes/group-by-pipe.pipe';
import { PlantMapDashboardService } from './services/plant-map-dashboard.service';
import { MiqViewComponent } from './components/miq-view-dashboard/miq-view/miq-view.component';
import { MiqViewService } from './services/miq-view.service';
import { ProcessMiningComponent } from './components/quadrant-dashboard/process-mining/process-mining.component';
import { DecisionTreeComponent } from './components/quadrant-dashboard/decision-tree/decision-tree.component';
import { NotificationComponent } from './components/quadrant-dashboard/notification/notification.component';
import { MaximizeComponent } from './components/quadrant-dashboard/maximize/maximize.component';
import { ChartsModule } from 'ng2-charts';
import { QuadrantService } from './services/quadrant.service';

@NgModule({
  declarations: [
    AppComponent,
    QuadrantDashboardComponent,
    MiqViewDashboardComponent,
    PlantMapDashboardComponent,
    PlantListViewComponent,
    PlantMapViewComponent,
    PlantDetailViewComponent,
    TypeaheadComponent,
    NavBarComponent,
    GroupByPipe,
    MiqViewComponent,
    ProcessMiningComponent,
    DecisionTreeComponent,
    NotificationComponent,
    MaximizeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule,
    CdkTableModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDiZjHIiSszryq_1S1oiZPfKlP4cGqt8Qk'
    }),
    AgmSnazzyInfoWindowModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [
    AppDataService,
    PlantMapDashboardService,
    MiqViewService,
    QuadrantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
