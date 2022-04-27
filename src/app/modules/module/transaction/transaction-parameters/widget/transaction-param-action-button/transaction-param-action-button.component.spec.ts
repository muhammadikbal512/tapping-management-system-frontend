import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionParamActionButtonComponent } from './transaction-param-action-button.component';

describe('TransactionParamActionButtonComponent', () => {
  let component: TransactionParamActionButtonComponent;
  let fixture: ComponentFixture<TransactionParamActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionParamActionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionParamActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
