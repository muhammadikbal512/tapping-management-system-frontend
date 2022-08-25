import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDeviceMonitoringComponent } from './table-device-monitoring.component';

describe('TableDeviceMonitoringComponent', () => {
  let component: TableDeviceMonitoringComponent;
  let fixture: ComponentFixture<TableDeviceMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDeviceMonitoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDeviceMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
