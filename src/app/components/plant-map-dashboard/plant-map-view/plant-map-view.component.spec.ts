import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantMapViewComponent } from './plant-map-view.component';

describe('PlantMapViewComponent', () => {
  let component: PlantMapViewComponent;
  let fixture: ComponentFixture<PlantMapViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantMapViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantMapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
