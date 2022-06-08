import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIso20022Component } from './table-iso20022.component';

describe('TableIso20022Component', () => {
  let component: TableIso20022Component;
  let fixture: ComponentFixture<TableIso20022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableIso20022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableIso20022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
