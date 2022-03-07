import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateSchemeComponent } from './private-scheme.component';

describe('PrivateSchemeComponent', () => {
  let component: PrivateSchemeComponent;
  let fixture: ComponentFixture<PrivateSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateSchemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
