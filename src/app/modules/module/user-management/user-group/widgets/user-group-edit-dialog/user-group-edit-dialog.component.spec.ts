import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupEditDialogComponent } from './user-group-edit-dialog.component';

describe('UserGroupEditDialogComponent', () => {
  let component: UserGroupEditDialogComponent;
  let fixture: ComponentFixture<UserGroupEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGroupEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
