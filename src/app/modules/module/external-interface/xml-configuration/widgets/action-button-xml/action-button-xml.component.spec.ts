import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonXmlComponent } from './action-button-xml.component';

describe('ActionButtonXmlComponent', () => {
  let component: ActionButtonXmlComponent;
  let fixture: ComponentFixture<ActionButtonXmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonXmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
