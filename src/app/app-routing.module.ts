import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { QuadrantDashboardComponent } from './components/quadrant-dashboard/quadrant-dashboard.component';
import { MaximizeComponent } from './components/quadrant-dashboard/maximize/maximize.component';
import { MiqViewDashboardComponent } from './components/miq-view-dashboard/miq-view-dashboard.component';
import { PlantMapDashboardComponent } from './components/plant-map-dashboard/plant-map-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PlantMapDashboardComponent
  },
  {
    path: 'miq',
    component: MiqViewDashboardComponent
  },
  {
    path: 'quadrant',
    component: QuadrantDashboardComponent
  },
  {
    path: 'quadrant-max',
    component: MaximizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
