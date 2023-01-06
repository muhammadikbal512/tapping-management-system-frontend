import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkLayerCaseComponent } from './network-layer-case.component';

describe('NetworkLayerCaseComponent', () => {
  let component: NetworkLayerCaseComponent;
  let fixture: ComponentFixture<NetworkLayerCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkLayerCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkLayerCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
