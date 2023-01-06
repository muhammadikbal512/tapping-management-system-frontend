import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoConfigurationComponent } from './iso-configuration.component';

describe('IsoConfigurationComponent', () => {
  let component: IsoConfigurationComponent;
  let fixture: ComponentFixture<IsoConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsoConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
