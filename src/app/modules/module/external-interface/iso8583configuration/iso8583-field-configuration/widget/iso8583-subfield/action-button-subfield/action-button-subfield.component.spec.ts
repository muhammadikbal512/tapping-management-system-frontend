import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonSubfieldComponent } from './action-button-subfield.component';

describe('ActionButtonSubfieldComponent', () => {
  let component: ActionButtonSubfieldComponent;
  let fixture: ComponentFixture<ActionButtonSubfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonSubfieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonSubfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
