import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeActionCaseComponent } from './take-action-case.component';

describe('TakeActionCaseComponent', () => {
  let component: TakeActionCaseComponent;
  let fixture: ComponentFixture<TakeActionCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeActionCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeActionCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
