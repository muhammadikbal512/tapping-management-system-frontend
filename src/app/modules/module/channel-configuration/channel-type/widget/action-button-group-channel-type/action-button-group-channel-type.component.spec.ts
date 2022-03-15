import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonGroupChannelTypeComponent } from './action-button-group-channel-type.component';

describe('ActionButtonGroupChannelTypeComponent', () => {
  let component: ActionButtonGroupChannelTypeComponent;
  let fixture: ComponentFixture<ActionButtonGroupChannelTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonGroupChannelTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonGroupChannelTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
