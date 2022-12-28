import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayerComponent } from './app-layer.component';

describe('AppLayerComponent', () => {
  let component: AppLayerComponent;
  let fixture: ComponentFixture<AppLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
