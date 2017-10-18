import { TestBed, inject } from '@angular/core/testing';

import { PlantMapDashboardService } from './plant-map-dashboard.service';

describe('PlantMapDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantMapDashboardService]
    });
  });

  it('should be created', inject([PlantMapDashboardService], (service: PlantMapDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
