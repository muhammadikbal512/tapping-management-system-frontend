import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertIssuerTableComponent } from './alert-issuer-table.component';

describe('AlertIssuerTableComponent', () => {
  let component: AlertIssuerTableComponent;
  let fixture: ComponentFixture<AlertIssuerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertIssuerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertIssuerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
