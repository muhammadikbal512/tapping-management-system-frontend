import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonJsonComponent } from './action-button-json.component';

describe('ActionButtonJsonComponent', () => {
  let component: ActionButtonJsonComponent;
  let fixture: ComponentFixture<ActionButtonJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
