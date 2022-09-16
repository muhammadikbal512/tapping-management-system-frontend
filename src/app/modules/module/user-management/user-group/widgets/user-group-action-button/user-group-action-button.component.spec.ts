import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupActionButtonComponent } from './user-group-action-button.component';

describe('UserGroupActionButtonComponent', () => {
  let component: UserGroupActionButtonComponent;
  let fixture: ComponentFixture<UserGroupActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGroupActionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
