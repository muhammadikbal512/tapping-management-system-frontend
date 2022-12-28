import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateIso8583DialectComponent } from './create-update-iso8583-dialect.component';

describe('CreateUpdateIso8583DialectComponent', () => {
  let component: CreateUpdateIso8583DialectComponent;
  let fixture: ComponentFixture<CreateUpdateIso8583DialectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateIso8583DialectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateIso8583DialectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
