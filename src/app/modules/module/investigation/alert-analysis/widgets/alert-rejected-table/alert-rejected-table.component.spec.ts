import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertRejectedTableComponent } from './alert-rejected-table.component';

describe('AlertRejectedTableComponent', () => {
  let component: AlertRejectedTableComponent;
  let fixture: ComponentFixture<AlertRejectedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertRejectedTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertRejectedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
