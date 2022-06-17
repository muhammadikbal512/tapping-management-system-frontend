import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceListCardComponent } from './interface-list-card.component';

describe('InterfaceListCardComponent', () => {
  let component: InterfaceListCardComponent;
  let fixture: ComponentFixture<InterfaceListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
