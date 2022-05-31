import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonSchemeComponent } from './action-button-scheme.component';

describe('ActionButtonSchemeComponent', () => {
  let component: ActionButtonSchemeComponent;
  let fixture: ComponentFixture<ActionButtonSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonSchemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
