import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonAlertIssuerComponent } from './action-button-alert-issuer.component';

describe('ActionButtonAlertIssuerComponent', () => {
  let component: ActionButtonAlertIssuerComponent;
  let fixture: ComponentFixture<ActionButtonAlertIssuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonAlertIssuerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonAlertIssuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
