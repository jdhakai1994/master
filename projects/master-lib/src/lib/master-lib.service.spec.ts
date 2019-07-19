import { TestBed } from '@angular/core/testing';

import { MasterLibService } from './master-lib.service';

describe('MasterLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterLibService = TestBed.get(MasterLibService);
    expect(service).toBeTruthy();
  });
});
