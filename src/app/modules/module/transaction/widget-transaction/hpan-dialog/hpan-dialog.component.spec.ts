import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpanDialogComponent } from './hpan-dialog.component';

describe('HpanDialogComponent', () => {
  let component: HpanDialogComponent;
  let fixture: ComponentFixture<HpanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpanDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
