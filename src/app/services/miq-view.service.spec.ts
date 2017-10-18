import { TestBed, inject } from '@angular/core/testing';

import { MiqViewService } from './miq-view.service';

describe('MiqViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiqViewService]
    });
  });

  it('should be created', inject([MiqViewService], (service: MiqViewService) => {
    expect(service).toBeTruthy();
  }));
});
