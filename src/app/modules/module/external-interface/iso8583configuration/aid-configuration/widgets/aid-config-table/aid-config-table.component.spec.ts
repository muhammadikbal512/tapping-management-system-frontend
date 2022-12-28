import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AidConfigTableComponent } from './aid-config-table.component';

describe('AidConfigTableComponent', () => {
  let component: AidConfigTableComponent;
  let fixture: ComponentFixture<AidConfigTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AidConfigTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AidConfigTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
