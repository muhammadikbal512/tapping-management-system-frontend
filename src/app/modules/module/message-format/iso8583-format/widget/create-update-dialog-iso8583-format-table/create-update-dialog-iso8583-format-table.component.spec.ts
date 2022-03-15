import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateDialogIso8583FormatTableComponent } from './create-update-dialog-iso8583-format-table.component';

describe('CreateUpdateDialogIso8583FormatTableComponent', () => {
  let component: CreateUpdateDialogIso8583FormatTableComponent;
  let fixture: ComponentFixture<CreateUpdateDialogIso8583FormatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateDialogIso8583FormatTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateDialogIso8583FormatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
