import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantMapDashboardComponent } from './plant-map-dashboard.component';

describe('PlantMapDashboardComponent', () => {
  let component: PlantMapDashboardComponent;
  let fixture: ComponentFixture<PlantMapDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantMapDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantMapDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
