import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonInterfaceComponent } from './action-button-interface.component';

describe('ActionButtonInterfaceComponent', () => {
  let component: ActionButtonInterfaceComponent;
  let fixture: ComponentFixture<ActionButtonInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
