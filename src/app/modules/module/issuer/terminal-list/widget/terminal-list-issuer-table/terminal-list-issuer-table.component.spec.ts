import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalListIssuerTableComponent } from './terminal-list-issuer-table.component';

describe('TerminalListIssuerTableComponent', () => {
  let component: TerminalListIssuerTableComponent;
  let fixture: ComponentFixture<TerminalListIssuerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalListIssuerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalListIssuerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
