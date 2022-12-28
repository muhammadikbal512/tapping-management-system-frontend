import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso8583dialectComponent } from './iso8583dialect.component';

describe('Iso8583dialectComponent', () => {
  let component: Iso8583dialectComponent;
  let fixture: ComponentFixture<Iso8583dialectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iso8583dialectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso8583dialectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
