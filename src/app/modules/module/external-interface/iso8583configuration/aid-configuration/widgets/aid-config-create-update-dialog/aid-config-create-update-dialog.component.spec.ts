import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AidConfigCreateUpdateDialogComponent } from './aid-config-create-update-dialog.component';

describe('AidConfigCreateUpdateDialogComponent', () => {
  let component: AidConfigCreateUpdateDialogComponent;
  let fixture: ComponentFixture<AidConfigCreateUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AidConfigCreateUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AidConfigCreateUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
