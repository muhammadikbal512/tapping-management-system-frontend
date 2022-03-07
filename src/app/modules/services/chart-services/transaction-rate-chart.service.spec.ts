import { TestBed } from '@angular/core/testing';

import { TransactionRateChartService } from './transaction-rate-chart.service';

describe('TransactionRateChartService', () => {
  let service: TransactionRateChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionRateChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
