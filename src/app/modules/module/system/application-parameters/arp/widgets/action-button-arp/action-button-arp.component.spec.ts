import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonArpComponent } from './action-button-arp.component';

describe('ActionButtonArpComponent', () => {
  let component: ActionButtonArpComponent;
  let fixture: ComponentFixture<ActionButtonArpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonArpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonArpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
