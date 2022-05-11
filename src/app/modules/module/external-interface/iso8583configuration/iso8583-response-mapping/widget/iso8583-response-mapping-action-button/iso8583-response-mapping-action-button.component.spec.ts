import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso8583ResponseMappingActionButtonComponent } from './iso8583-response-mapping-action-button.component';

describe('Iso8583ResponseMappingActionButtonComponent', () => {
  let component: Iso8583ResponseMappingActionButtonComponent;
  let fixture: ComponentFixture<Iso8583ResponseMappingActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iso8583ResponseMappingActionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso8583ResponseMappingActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
