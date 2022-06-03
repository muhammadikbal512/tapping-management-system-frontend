import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateSystemParametersComponent } from './create-update-system-parameters.component';

describe('CreateUpdateSystemParametersComponent', () => {
  let component: CreateUpdateSystemParametersComponent;
  let fixture: ComponentFixture<CreateUpdateSystemParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateSystemParametersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateSystemParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
