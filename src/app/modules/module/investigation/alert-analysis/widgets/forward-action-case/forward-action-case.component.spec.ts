import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardActionCaseComponent } from './forward-action-case.component';

describe('ForwardActionCaseComponent', () => {
  let component: ForwardActionCaseComponent;
  let fixture: ComponentFixture<ForwardActionCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardActionCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardActionCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
