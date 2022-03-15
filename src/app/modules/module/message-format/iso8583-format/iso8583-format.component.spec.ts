import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso8583FormatComponent } from './iso8583-format.component';

describe('Iso8583FormatComponent', () => {
  let component: Iso8583FormatComponent;
  let fixture: ComponentFixture<Iso8583FormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iso8583FormatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso8583FormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
