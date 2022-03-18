import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonGroupIso8583DialectComponent } from './action-button-group-iso8583-dialect.component';

describe('ActionButtonGroupIso8583DialectComponent', () => {
  let component: ActionButtonGroupIso8583DialectComponent;
  let fixture: ComponentFixture<ActionButtonGroupIso8583DialectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonGroupIso8583DialectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonGroupIso8583DialectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
