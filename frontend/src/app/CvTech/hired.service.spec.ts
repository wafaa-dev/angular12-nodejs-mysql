import { TestBed } from '@angular/core/testing';

import { HiredService } from './hired.service';

describe('HiredService', () => {
  let service: HiredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HiredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
