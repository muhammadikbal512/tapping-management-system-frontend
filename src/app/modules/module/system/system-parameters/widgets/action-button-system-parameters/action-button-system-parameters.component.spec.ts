import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonSystemParametersComponent } from './action-button-system-parameters.component';

describe('ActionButtonSystemParametersComponent', () => {
  let component: ActionButtonSystemParametersComponent;
  let fixture: ComponentFixture<ActionButtonSystemParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonSystemParametersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonSystemParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
