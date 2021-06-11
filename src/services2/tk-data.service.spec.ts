import { TestBed } from '@angular/core/testing';

import { TKDataService } from './tk-data.service';

describe('TKDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TKDataService = TestBed.get(TKDataService);
    expect(service).toBeTruthy();
  });
});
