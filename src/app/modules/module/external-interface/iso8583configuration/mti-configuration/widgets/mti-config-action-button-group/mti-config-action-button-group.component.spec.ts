import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtiConfigActionButtonGroupComponent } from './mti-config-action-button-group.component';

describe('MtiConfigActionButtonGroupComponent', () => {
  let component: MtiConfigActionButtonGroupComponent;
  let fixture: ComponentFixture<MtiConfigActionButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtiConfigActionButtonGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtiConfigActionButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
