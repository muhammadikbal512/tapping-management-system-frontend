import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtiConfigCreateUpdateDialogComponent } from './mti-config-create-update-dialog.component';

describe('MtiConfigCreateUpdateDialogComponent', () => {
  let component: MtiConfigCreateUpdateDialogComponent;
  let fixture: ComponentFixture<MtiConfigCreateUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtiConfigCreateUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtiConfigCreateUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
