import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonInstitutionComponent } from './action-button-institution.component';

describe('ActionButtonInstitutionComponent', () => {
  let component: ActionButtonInstitutionComponent;
  let fixture: ComponentFixture<ActionButtonInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonInstitutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
