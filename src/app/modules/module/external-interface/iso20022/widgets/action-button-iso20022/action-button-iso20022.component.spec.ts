import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonIso20022Component } from './action-button-iso20022.component';

describe('ActionButtonIso20022Component', () => {
  let component: ActionButtonIso20022Component;
  let fixture: ComponentFixture<ActionButtonIso20022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonIso20022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonIso20022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
