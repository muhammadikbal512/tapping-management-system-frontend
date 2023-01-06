import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoConfigCreateUpdateDialogComponent } from './iso-config-create-update-dialog.component';

describe('IsoConfigCreateUpdateDialogComponent', () => {
  let component: IsoConfigCreateUpdateDialogComponent;
  let fixture: ComponentFixture<IsoConfigCreateUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsoConfigCreateUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoConfigCreateUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
