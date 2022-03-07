import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAnalysisComponent } from './alert-analysis.component';

describe('AlertAnalysisComponent', () => {
  let component: AlertAnalysisComponent;
  let fixture: ComponentFixture<AlertAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
