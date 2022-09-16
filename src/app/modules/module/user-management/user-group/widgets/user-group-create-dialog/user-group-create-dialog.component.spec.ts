import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupCreateDialogComponent } from './user-group-create-dialog.component';

describe('UserGroupCreateDialogComponent', () => {
  let component: UserGroupCreateDialogComponent;
  let fixture: ComponentFixture<UserGroupCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGroupCreateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
