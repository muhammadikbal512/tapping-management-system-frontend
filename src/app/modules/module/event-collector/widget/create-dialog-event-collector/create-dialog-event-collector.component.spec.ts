import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDialogEventCollectorComponent } from './create-dialog-event-collector.component';

describe('CreateDialogEventCollectorComponent', () => {
  let component: CreateDialogEventCollectorComponent;
  let fixture: ComponentFixture<CreateDialogEventCollectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDialogEventCollectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDialogEventCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
