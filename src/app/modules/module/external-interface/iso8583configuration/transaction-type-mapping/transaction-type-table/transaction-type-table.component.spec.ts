import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTypeTableComponent } from './transaction-type-table.component';

describe('TransactionTypeTableComponent', () => {
  let component: TransactionTypeTableComponent;
  let fixture: ComponentFixture<TransactionTypeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionTypeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
