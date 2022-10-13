import { TestBed } from '@angular/core/testing';

import { WReportService } from './w-report.service';

describe('WReportService', () => {
  let service: WReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
