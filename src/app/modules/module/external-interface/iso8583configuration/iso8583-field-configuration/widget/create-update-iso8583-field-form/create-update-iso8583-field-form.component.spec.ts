import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateIso8583FieldFormComponent } from './create-update-iso8583-field-form.component';

describe('CreateUpdateIso8583FieldFormComponent', () => {
  let component: CreateUpdateIso8583FieldFormComponent;
  let fixture: ComponentFixture<CreateUpdateIso8583FieldFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateIso8583FieldFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateIso8583FieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
