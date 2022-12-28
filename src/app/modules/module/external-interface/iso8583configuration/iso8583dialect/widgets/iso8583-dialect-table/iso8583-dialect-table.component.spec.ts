import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso8583DialectTableComponent } from './iso8583-dialect-table.component';

describe('Iso8583DialectTableComponent', () => {
  let component: Iso8583DialectTableComponent;
  let fixture: ComponentFixture<Iso8583DialectTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iso8583DialectTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso8583DialectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
