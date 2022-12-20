import { TestBed } from '@angular/core/testing';

import { WaveFunctionCollapseService } from './wave-function-collapse.service';

describe('WaveFunctionCollapseService', () => {
  let service: WaveFunctionCollapseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaveFunctionCollapseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
