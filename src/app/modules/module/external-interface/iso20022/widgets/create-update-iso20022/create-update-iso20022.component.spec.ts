import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateIso20022Component } from './create-update-iso20022.component';

describe('CreateUpdateIso20022Component', () => {
  let component: CreateUpdateIso20022Component;
  let fixture: ComponentFixture<CreateUpdateIso20022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateIso20022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateIso20022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
