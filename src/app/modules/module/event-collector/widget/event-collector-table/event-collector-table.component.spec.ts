import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCollectorTableComponent } from './event-collector-table.component';

describe('EventCollectorTableComponent', () => {
  let component: EventCollectorTableComponent;
  let fixture: ComponentFixture<EventCollectorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCollectorTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCollectorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
