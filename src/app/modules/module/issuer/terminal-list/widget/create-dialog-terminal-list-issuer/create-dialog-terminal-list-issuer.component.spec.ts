import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDialogTerminalListIssuerComponent } from './create-dialog-terminal-list-issuer.component';

describe('CreateDialogTerminalListIssuerComponent', () => {
  let component: CreateDialogTerminalListIssuerComponent;
  let fixture: ComponentFixture<CreateDialogTerminalListIssuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDialogTerminalListIssuerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDialogTerminalListIssuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
