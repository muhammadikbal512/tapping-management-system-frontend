import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonNdcComponent } from './action-button-ndc.component';

describe('ActionButtonNdcComponent', () => {
  let component: ActionButtonNdcComponent;
  let fixture: ComponentFixture<ActionButtonNdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonNdcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonNdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
