import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTransactionComponent } from './widget-transaction.component';

describe('WidgetTransactionComponent', () => {
  let component: WidgetTransactionComponent;
  let fixture: ComponentFixture<WidgetTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
