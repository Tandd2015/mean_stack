import { TestBed } from '@angular/core/testing';

import { PokeyService } from './pokey.service';

describe('PokeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeyService = TestBed.get(PokeyService);
    expect(service).toBeTruthy();
  });
});
