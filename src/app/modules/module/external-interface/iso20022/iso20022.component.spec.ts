import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso20022Component } from './iso20022.component';

describe('Iso20022Component', () => {
  let component: Iso20022Component;
  let fixture: ComponentFixture<Iso20022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iso20022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso20022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
