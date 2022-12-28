import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTypeMappingComponent } from './transaction-type-mapping.component';

describe('TransactionTypeMappingComponent', () => {
  let component: TransactionTypeMappingComponent;
  let fixture: ComponentFixture<TransactionTypeMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionTypeMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTypeMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
