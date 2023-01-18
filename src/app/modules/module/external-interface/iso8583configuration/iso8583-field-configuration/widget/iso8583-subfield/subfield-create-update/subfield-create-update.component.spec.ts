import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubfieldCreateUpdateComponent } from './subfield-create-update.component';

describe('SubfieldCreateUpdateComponent', () => {
  let component: SubfieldCreateUpdateComponent;
  let fixture: ComponentFixture<SubfieldCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubfieldCreateUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubfieldCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
