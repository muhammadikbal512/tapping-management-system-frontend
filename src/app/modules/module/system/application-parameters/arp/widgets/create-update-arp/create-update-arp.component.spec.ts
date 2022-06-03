import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateArpComponent } from './create-update-arp.component';

describe('CreateUpdateArpComponent', () => {
  let component: CreateUpdateArpComponent;
  let fixture: ComponentFixture<CreateUpdateArpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateArpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateArpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
