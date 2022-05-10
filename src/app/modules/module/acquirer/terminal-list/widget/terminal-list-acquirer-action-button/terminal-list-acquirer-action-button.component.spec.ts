import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalListAcquirerActionButtonComponent } from './terminal-list-acquirer-action-button.component';

describe('TerminalListAcquirerActionButtonComponent', () => {
  let component: TerminalListAcquirerActionButtonComponent;
  let fixture: ComponentFixture<TerminalListAcquirerActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalListAcquirerActionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalListAcquirerActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
