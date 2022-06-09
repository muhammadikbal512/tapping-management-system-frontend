import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableXmlComponent } from './table-xml.component';

describe('TableXmlComponent', () => {
  let component: TableXmlComponent;
  let fixture: ComponentFixture<TableXmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableXmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
