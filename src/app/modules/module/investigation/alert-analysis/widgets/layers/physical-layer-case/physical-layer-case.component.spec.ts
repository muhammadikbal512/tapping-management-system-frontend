import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalLayerCaseComponent } from './physical-layer-case.component';

describe('PhysicalLayerCaseComponent', () => {
  let component: PhysicalLayerCaseComponent;
  let fixture: ComponentFixture<PhysicalLayerCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalLayerCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalLayerCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
