import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDialogRolesComponent } from './edit-dialog-roles.component';

describe('EditDialogRolesComponent', () => {
  let component: EditDialogRolesComponent;
  let fixture: ComponentFixture<EditDialogRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDialogRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDialogRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
