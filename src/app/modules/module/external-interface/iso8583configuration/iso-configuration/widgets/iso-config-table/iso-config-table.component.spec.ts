import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoConfigTableComponent } from './iso-config-table.component';

describe('IsoConfigTableComponent', () => {
  let component: IsoConfigTableComponent;
  let fixture: ComponentFixture<IsoConfigTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsoConfigTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoConfigTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
