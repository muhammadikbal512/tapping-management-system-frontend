import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelTypeTableComponent } from './channel-type-table.component';

describe('ChannelTypeTableComponent', () => {
  let component: ChannelTypeTableComponent;
  let fixture: ComponentFixture<ChannelTypeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelTypeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelTypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
