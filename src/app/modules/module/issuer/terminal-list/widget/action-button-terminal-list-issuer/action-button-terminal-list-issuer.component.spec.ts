import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonTerminalListIssuerComponent } from './action-button-terminal-list-issuer.component';

describe('ActionButtonTerminalListIssuerComponent', () => {
  let component: ActionButtonTerminalListIssuerComponent;
  let fixture: ComponentFixture<ActionButtonTerminalListIssuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonTerminalListIssuerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonTerminalListIssuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
