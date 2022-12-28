import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AidConfigActionButtonComponent } from './aid-config-action-button.component';

describe('AidConfigActionButtonComponent', () => {
  let component: AidConfigActionButtonComponent;
  let fixture: ComponentFixture<AidConfigActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AidConfigActionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AidConfigActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
