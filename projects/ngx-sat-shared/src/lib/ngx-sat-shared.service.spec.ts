import { TestBed } from '@angular/core/testing';

import { NgxSatSharedService } from './ngx-sat-shared.service';

describe('NgxSatSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSatSharedService = TestBed.get(NgxSatSharedService);
    expect(service).toBeTruthy();
  });
});
