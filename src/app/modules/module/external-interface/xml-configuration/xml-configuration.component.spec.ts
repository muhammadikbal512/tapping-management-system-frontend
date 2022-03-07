import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlConfigurationComponent } from './xml-configuration.component';

describe('XmlConfigurationComponent', () => {
  let component: XmlConfigurationComponent;
  let fixture: ComponentFixture<XmlConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XmlConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XmlConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
