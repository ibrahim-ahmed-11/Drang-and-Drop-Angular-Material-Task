import { TestBed } from '@angular/core/testing';

import { GetFromAPIService } from './get-from-api.service';

describe('GetFromAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFromAPIService = TestBed.get(GetFromAPIService);
    expect(service).toBeTruthy();
  });
});
