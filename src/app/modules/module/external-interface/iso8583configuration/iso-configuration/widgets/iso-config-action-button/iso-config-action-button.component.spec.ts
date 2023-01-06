import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoConfigActionButtonComponent } from './iso-config-action-button.component';

describe('IsoConfigActionButtonComponent', () => {
  let component: IsoConfigActionButtonComponent;
  let fixture: ComponentFixture<IsoConfigActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsoConfigActionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoConfigActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
