import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonAcquirerAlertComponent } from './action-button-acquirer-alert.component';

describe('ActionButtonAcquirerAlertComponent', () => {
  let component: ActionButtonAcquirerAlertComponent;
  let fixture: ComponentFixture<ActionButtonAcquirerAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonAcquirerAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonAcquirerAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
