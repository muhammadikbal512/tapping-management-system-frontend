import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAcquirerTableComponent } from './alert-acquirer-table.component';

describe('AlertAcquirerTableComponent', () => {
  let component: AlertAcquirerTableComponent;
  let fixture: ComponentFixture<AlertAcquirerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertAcquirerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertAcquirerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
