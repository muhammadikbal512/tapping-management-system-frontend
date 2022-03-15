import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonGroupIso8583FormatComponent } from './action-button-group-iso8583-format.component';

describe('ActionButtonGroupIso8583FormatComponent', () => {
  let component: ActionButtonGroupIso8583FormatComponent;
  let fixture: ComponentFixture<ActionButtonGroupIso8583FormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonGroupIso8583FormatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonGroupIso8583FormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
