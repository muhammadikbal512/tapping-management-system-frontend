import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableArpComponent } from './table-arp.component';

describe('TableArpComponent', () => {
  let component: TableArpComponent;
  let fixture: ComponentFixture<TableArpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableArpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableArpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
