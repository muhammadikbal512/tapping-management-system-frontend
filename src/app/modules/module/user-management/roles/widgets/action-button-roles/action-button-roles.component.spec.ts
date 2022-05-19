import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonRolesComponent } from './action-button-roles.component';

describe('ActionButtonRolesComponent', () => {
  let component: ActionButtonRolesComponent;
  let fixture: ComponentFixture<ActionButtonRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
