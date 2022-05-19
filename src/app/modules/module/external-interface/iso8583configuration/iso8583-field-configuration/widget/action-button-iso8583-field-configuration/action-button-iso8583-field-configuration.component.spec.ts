import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonIso8583FieldConfigurationComponent } from './action-button-iso8583-field-configuration.component';

describe('ActionButtonIso8583FieldConfigurationComponent', () => {
  let component: ActionButtonIso8583FieldConfigurationComponent;
  let fixture: ComponentFixture<ActionButtonIso8583FieldConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonIso8583FieldConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonIso8583FieldConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
