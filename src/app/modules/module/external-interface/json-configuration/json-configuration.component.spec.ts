import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonConfigurationComponent } from './json-configuration.component';

describe('JsonConfigurationComponent', () => {
  let component: JsonConfigurationComponent;
  let fixture: ComponentFixture<JsonConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
