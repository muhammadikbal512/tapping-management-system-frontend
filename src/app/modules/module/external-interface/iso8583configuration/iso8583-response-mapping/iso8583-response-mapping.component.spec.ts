import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso8583ResponseMappingComponent } from './iso8583-response-mapping.component';

describe('Iso8583ResponseMappingComponent', () => {
  let component: Iso8583ResponseMappingComponent;
  let fixture: ComponentFixture<Iso8583ResponseMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iso8583ResponseMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso8583ResponseMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
