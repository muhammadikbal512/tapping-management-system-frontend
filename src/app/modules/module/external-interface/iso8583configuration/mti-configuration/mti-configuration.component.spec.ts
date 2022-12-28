import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtiConfigurationComponent } from './mti-configuration.component';

describe('MtiConfigurationComponent', () => {
  let component: MtiConfigurationComponent;
  let fixture: ComponentFixture<MtiConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtiConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtiConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
