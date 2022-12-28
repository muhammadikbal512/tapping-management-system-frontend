import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderConfigTableComponent } from './header-config-table.component';

describe('HeaderConfigTableComponent', () => {
  let component: HeaderConfigTableComponent;
  let fixture: ComponentFixture<HeaderConfigTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderConfigTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderConfigTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
