import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCollectorComponent } from './event-collector.component';

describe('EventCollectorComponent', () => {
  let component: EventCollectorComponent;
  let fixture: ComponentFixture<EventCollectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCollectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
