import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonGroupTerminalComponent } from './action-button-group-terminal.component';

describe('ActionButtonGroupTerminalComponent', () => {
  let component: ActionButtonGroupTerminalComponent;
  let fixture: ComponentFixture<ActionButtonGroupTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonGroupTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonGroupTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
