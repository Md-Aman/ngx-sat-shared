import { TestBed } from '@angular/core/testing';

import { SyncScrollService } from './sync-scroll.service';

describe('SyncScrollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SyncScrollService = TestBed.get(SyncScrollService);
    expect(service).toBeTruthy();
  });
});
