import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDialogAlertIssuerComponent } from './create-dialog-alert-issuer.component';

describe('CreateDialogAlertIssuerComponent', () => {
  let component: CreateDialogAlertIssuerComponent;
  let fixture: ComponentFixture<CreateDialogAlertIssuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDialogAlertIssuerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDialogAlertIssuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
