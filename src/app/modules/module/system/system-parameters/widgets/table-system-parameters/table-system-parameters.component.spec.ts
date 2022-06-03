import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSystemParametersComponent } from './table-system-parameters.component';

describe('TableSystemParametersComponent', () => {
  let component: TableSystemParametersComponent;
  let fixture: ComponentFixture<TableSystemParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSystemParametersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSystemParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
