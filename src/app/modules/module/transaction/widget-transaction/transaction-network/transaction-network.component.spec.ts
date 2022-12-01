import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionNetworkComponent } from './transaction-network.component';

describe('TransactionNetworkComponent', () => {
  let component: TransactionNetworkComponent;
  let fixture: ComponentFixture<TransactionNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
