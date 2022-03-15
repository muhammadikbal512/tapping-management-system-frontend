import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso8583FormatTableComponent } from './iso8583-format-table.component';

describe('Iso8583FormatTableComponent', () => {
  let component: Iso8583FormatTableComponent;
  let fixture: ComponentFixture<Iso8583FormatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iso8583FormatTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso8583FormatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
