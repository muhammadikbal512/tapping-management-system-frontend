import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTagLockComponent } from './user-tag-lock.component';

describe('UserTagLockComponent', () => {
  let component: UserTagLockComponent;
  let fixture: ComponentFixture<UserTagLockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTagLockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTagLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
