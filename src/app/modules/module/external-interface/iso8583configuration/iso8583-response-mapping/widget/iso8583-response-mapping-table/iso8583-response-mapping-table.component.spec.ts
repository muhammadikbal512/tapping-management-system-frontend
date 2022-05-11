import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso8583ResponseMappingTableComponent } from './iso8583-response-mapping-table.component';

describe('Iso8583ResponseMappingTableComponent', () => {
  let component: Iso8583ResponseMappingTableComponent;
  let fixture: ComponentFixture<Iso8583ResponseMappingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iso8583ResponseMappingTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso8583ResponseMappingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
