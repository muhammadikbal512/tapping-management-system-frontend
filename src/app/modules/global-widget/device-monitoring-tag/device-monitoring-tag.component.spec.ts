import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMonitoringTagComponent } from './device-monitoring-tag.component';

describe('DeviceMonitoringTagComponent', () => {
  let component: DeviceMonitoringTagComponent;
  let fixture: ComponentFixture<DeviceMonitoringTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceMonitoringTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceMonitoringTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
