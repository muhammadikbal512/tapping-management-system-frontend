import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNdcComponent } from './table-ndc.component';

describe('TableNdcComponent', () => {
  let component: TableNdcComponent;
  let fixture: ComponentFixture<TableNdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableNdcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
