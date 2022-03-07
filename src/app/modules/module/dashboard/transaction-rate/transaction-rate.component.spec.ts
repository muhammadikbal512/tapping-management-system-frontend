import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRateComponent } from './transaction-rate.component';

describe('TransactionRateComponent', () => {
  let component: TransactionRateComponent;
  let fixture: ComponentFixture<TransactionRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
