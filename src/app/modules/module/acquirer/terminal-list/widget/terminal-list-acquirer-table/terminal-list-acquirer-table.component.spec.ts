import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalListAcquirerTableComponent } from './terminal-list-acquirer-table.component';

describe('TerminalListAcquirerTableComponent', () => {
  let component: TerminalListAcquirerTableComponent;
  let fixture: ComponentFixture<TerminalListAcquirerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalListAcquirerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalListAcquirerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
