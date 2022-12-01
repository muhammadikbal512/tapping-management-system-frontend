import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertQueueTableComponent } from './alert-queue-table.component';

describe('AlertQueueTableComponent', () => {
  let component: AlertQueueTableComponent;
  let fixture: ComponentFixture<AlertQueueTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertQueueTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertQueueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
