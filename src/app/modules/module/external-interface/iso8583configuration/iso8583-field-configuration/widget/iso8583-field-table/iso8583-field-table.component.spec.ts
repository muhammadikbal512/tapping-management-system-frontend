import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso8583FieldTableComponent } from './iso8583-field-table.component';

describe('Iso8583FieldTableComponent', () => {
  let component: Iso8583FieldTableComponent;
  let fixture: ComponentFixture<Iso8583FieldTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iso8583FieldTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso8583FieldTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
