import { TestBed, inject } from '@angular/core/testing';

import { TKServiceService } from './tk-service.service';
import { beforeEach } from 'jasmine';
import { describe } from 'jasmine';
import { expect } from 'jasmine';
import { it } from 'jasmine';

describe('TKServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TKServiceService]
    });
  });

  it('should be created', inject([TKServiceService], (service: TKServiceService) => {
    expect(service).toBeTruthy();
  }));
});
