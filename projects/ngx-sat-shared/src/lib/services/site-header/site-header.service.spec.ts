import { TestBed } from '@angular/core/testing';

import { SiteHeaderService } from './site-header.service';

describe('SiteHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiteHeaderService = TestBed.get(SiteHeaderService);
    expect(service).toBeTruthy();
  });
});
