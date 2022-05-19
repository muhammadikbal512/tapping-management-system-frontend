import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonEventCollectorComponent } from './action-button-event-collector.component';

describe('ActionButtonEventCollectorComponent', () => {
  let component: ActionButtonEventCollectorComponent;
  let fixture: ComponentFixture<ActionButtonEventCollectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonEventCollectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonEventCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
