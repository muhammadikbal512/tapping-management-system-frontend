import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFlowTableComponent } from './transaction-flow-table.component';

describe('TransactionFlowTableComponent', () => {
  let component: TransactionFlowTableComponent;
  let fixture: ComponentFixture<TransactionFlowTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionFlowTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionFlowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
