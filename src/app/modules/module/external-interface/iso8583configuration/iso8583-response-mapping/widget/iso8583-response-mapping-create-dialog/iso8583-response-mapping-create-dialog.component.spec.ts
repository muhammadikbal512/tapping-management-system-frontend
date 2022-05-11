import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso8583ResponseMappingCreateDialogComponent } from './iso8583-response-mapping-create-dialog.component';

describe('Iso8583ResponseMappingCreateDialogComponent', () => {
  let component: Iso8583ResponseMappingCreateDialogComponent;
  let fixture: ComponentFixture<Iso8583ResponseMappingCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iso8583ResponseMappingCreateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso8583ResponseMappingCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
