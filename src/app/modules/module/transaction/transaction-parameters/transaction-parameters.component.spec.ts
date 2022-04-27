import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionParametersComponent } from './transaction-parameters.component';

describe('TransactionParametersComponent', () => {
  let component: TransactionParametersComponent;
  let fixture: ComponentFixture<TransactionParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionParametersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
