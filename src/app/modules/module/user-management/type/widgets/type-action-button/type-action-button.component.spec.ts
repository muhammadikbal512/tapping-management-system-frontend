import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeActionButtonComponent } from './type-action-button.component';

describe('TypeActionButtonComponent', () => {
  let component: TypeActionButtonComponent;
  let fixture: ComponentFixture<TypeActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeActionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
