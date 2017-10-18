import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiqViewDashboardComponent } from './miq-view-dashboard.component';

describe('MiqViewDashboardComponent', () => {
  let component: MiqViewDashboardComponent;
  let fixture: ComponentFixture<MiqViewDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiqViewDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiqViewDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
