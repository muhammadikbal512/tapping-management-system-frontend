import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonAlertAnalysisComponent } from './action-button-alert-analysis.component';

describe('ActionButtonAlertAnalysisComponent', () => {
  let component: ActionButtonAlertAnalysisComponent;
  let fixture: ComponentFixture<ActionButtonAlertAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonAlertAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonAlertAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
