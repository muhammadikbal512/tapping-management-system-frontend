import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUserGroupComponent } from './table-user-group.component';

describe('TableUserGroupComponent', () => {
  let component: TableUserGroupComponent;
  let fixture: ComponentFixture<TableUserGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUserGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUserGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
