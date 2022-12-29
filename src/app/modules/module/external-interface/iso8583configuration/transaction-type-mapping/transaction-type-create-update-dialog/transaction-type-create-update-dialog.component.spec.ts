import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTypeCreateUpdateDialogComponent } from './transaction-type-create-update-dialog.component';

describe('TransactionTypeCreateUpdateDialogComponent', () => {
  let component: TransactionTypeCreateUpdateDialogComponent;
  let fixture: ComponentFixture<TransactionTypeCreateUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionTypeCreateUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTypeCreateUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
