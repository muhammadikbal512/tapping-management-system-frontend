import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAnalysisTableComponent } from './alert-analysis-table.component';

describe('AlertAnalysisTableComponent', () => {
  let component: AlertAnalysisTableComponent;
  let fixture: ComponentFixture<AlertAnalysisTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertAnalysisTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertAnalysisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
