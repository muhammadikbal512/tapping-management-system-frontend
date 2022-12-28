import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderConfigActionButtonComponent } from './header-config-action-button.component';

describe('HeaderConfigActionButtonComponent', () => {
  let component: HeaderConfigActionButtonComponent;
  let fixture: ComponentFixture<HeaderConfigActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderConfigActionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderConfigActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
