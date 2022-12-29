import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTypeActionButtonGroupComponent } from './transaction-type-action-button-group.component';

describe('TransactionTypeActionButtonGroupComponent', () => {
  let component: TransactionTypeActionButtonGroupComponent;
  let fixture: ComponentFixture<TransactionTypeActionButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionTypeActionButtonGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTypeActionButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
