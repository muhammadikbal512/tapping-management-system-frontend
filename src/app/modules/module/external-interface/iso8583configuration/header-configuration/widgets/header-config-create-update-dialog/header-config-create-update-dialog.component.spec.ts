import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderConfigCreateUpdateDialogComponent } from './header-config-create-update-dialog.component';

describe('HeaderConfigCreateUpdateDialogComponent', () => {
  let component: HeaderConfigCreateUpdateDialogComponent;
  let fixture: ComponentFixture<HeaderConfigCreateUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderConfigCreateUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderConfigCreateUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
