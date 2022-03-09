import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTransactionComponent } from './forms-transaction.component';

describe('FormsTransactionComponent', () => {
  let component: FormsTransactionComponent;
  let fixture: ComponentFixture<FormsTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
