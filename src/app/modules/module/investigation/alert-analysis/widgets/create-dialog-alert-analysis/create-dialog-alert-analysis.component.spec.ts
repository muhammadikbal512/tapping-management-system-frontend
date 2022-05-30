import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDialogAlertAnalysisComponent } from './create-dialog-alert-analysis.component';

describe('CreateDialogAlertAnalysisComponent', () => {
  let component: CreateDialogAlertAnalysisComponent;
  let fixture: ComponentFixture<CreateDialogAlertAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDialogAlertAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDialogAlertAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
