import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtiConfigTableComponent } from './mti-config-table.component';

describe('MtiConfigTableComponent', () => {
  let component: MtiConfigTableComponent;
  let fixture: ComponentFixture<MtiConfigTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtiConfigTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtiConfigTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
