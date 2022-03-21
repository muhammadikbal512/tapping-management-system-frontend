import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateDialogTypeComponent } from './create-update-dialog-type.component';

describe('CreateUpdateDialogTypeComponent', () => {
  let component: CreateUpdateDialogTypeComponent;
  let fixture: ComponentFixture<CreateUpdateDialogTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateDialogTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateDialogTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
