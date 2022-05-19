import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionParamDialogComponent } from './transaction-param-dialog.component';

describe('TransactionParamDialogComponent', () => {
  let component: TransactionParamDialogComponent;
  let fixture: ComponentFixture<TransactionParamDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionParamDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionParamDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
