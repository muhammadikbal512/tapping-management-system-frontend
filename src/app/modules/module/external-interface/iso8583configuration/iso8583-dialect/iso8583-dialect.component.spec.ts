import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso8583DialectComponent } from './iso8583-dialect.component';

describe('Iso8583DialectComponent', () => {
  let component: Iso8583DialectComponent;
  let fixture: ComponentFixture<Iso8583DialectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iso8583DialectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso8583DialectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
