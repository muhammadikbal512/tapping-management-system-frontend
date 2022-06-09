import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDialogNdcComponent } from './create-dialog-ndc.component';

describe('CreateDialogNdcComponent', () => {
  let component: CreateDialogNdcComponent;
  let fixture: ComponentFixture<CreateDialogNdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDialogNdcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDialogNdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
