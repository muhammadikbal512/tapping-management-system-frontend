import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInstitutionComponent } from './table-institution.component';

describe('TableInstitutionComponent', () => {
  let component: TableInstitutionComponent;
  let fixture: ComponentFixture<TableInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableInstitutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
