import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDialogRolesComponent } from './create-dialog-roles.component';

describe('CreateDialogRolesComponent', () => {
  let component: CreateDialogRolesComponent;
  let fixture: ComponentFixture<CreateDialogRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDialogRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDialogRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
