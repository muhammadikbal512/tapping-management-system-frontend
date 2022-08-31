import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionCreateDialogComponent } from './institution-create-dialog.component';

describe('InstitutionCreateDialogComponent', () => {
  let component: InstitutionCreateDialogComponent;
  let fixture: ComponentFixture<InstitutionCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionCreateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
