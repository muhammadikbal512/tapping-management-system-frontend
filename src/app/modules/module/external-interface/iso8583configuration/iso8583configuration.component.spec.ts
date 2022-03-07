import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso8583configurationComponent } from './iso8583configuration.component';

describe('Iso8583configurationComponent', () => {
  let component: Iso8583configurationComponent;
  let fixture: ComponentFixture<Iso8583configurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iso8583configurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso8583configurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
