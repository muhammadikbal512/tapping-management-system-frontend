import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionVirtualComponent } from './transaction-virtual.component';

describe('TransactionVirtualComponent', () => {
  let component: TransactionVirtualComponent;
  let fixture: ComponentFixture<TransactionVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionVirtualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
