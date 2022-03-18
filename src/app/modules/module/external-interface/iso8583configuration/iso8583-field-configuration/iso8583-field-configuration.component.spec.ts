import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso8583FieldConfigurationComponent } from './iso8583-field-configuration.component';

describe('Iso8583FieldConfigurationComponent', () => {
  let component: Iso8583FieldConfigurationComponent;
  let fixture: ComponentFixture<Iso8583FieldConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iso8583FieldConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso8583FieldConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
