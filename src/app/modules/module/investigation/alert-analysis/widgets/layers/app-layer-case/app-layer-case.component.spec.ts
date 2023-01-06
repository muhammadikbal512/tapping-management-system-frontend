import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayerCaseComponent } from './app-layer-case.component';

describe('AppLayerCaseComponent', () => {
  let component: AppLayerCaseComponent;
  let fixture: ComponentFixture<AppLayerCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLayerCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayerCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
