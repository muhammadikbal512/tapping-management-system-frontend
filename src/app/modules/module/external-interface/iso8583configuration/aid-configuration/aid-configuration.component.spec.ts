import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AidConfigurationComponent } from './aid-configuration.component';

describe('AidConfigurationComponent', () => {
  let component: AidConfigurationComponent;
  let fixture: ComponentFixture<AidConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AidConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AidConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
