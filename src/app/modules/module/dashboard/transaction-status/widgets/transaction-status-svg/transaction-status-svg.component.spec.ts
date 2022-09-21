import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionStatusSvgComponent } from './transaction-status-svg.component';

describe('TransactionStatusSvgComponent', () => {
  let component: TransactionStatusSvgComponent;
  let fixture: ComponentFixture<TransactionStatusSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionStatusSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionStatusSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
