import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertIssuerComponent } from './alert-issuer.component';

describe('AlertIssuerComponent', () => {
  let component: AlertIssuerComponent;
  let fixture: ComponentFixture<AlertIssuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertIssuerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertIssuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
