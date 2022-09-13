import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionActionButtonComponent } from './institution-action-button.component';

describe('InstitutionActionButtonComponent', () => {
  let component: InstitutionActionButtonComponent;
  let fixture: ComponentFixture<InstitutionActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionActionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
