import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDialogIso8583FormatComponent } from './edit-dialog-iso8583-format.component';

describe('EditDialogIso8583FormatComponent', () => {
  let component: EditDialogIso8583FormatComponent;
  let fixture: ComponentFixture<EditDialogIso8583FormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDialogIso8583FormatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDialogIso8583FormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
