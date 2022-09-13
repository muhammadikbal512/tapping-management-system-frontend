import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionEditDialogComponent } from './institution-edit-dialog.component';

describe('InstitutionEditDialogComponent', () => {
  let component: InstitutionEditDialogComponent;
  let fixture: ComponentFixture<InstitutionEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
