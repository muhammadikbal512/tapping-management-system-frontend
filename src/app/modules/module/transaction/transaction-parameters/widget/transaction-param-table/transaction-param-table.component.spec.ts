import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionParamTableComponent } from './transaction-param-table.component';

describe('TransactionParamTableComponent', () => {
  let component: TransactionParamTableComponent;
  let fixture: ComponentFixture<TransactionParamTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionParamTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionParamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
