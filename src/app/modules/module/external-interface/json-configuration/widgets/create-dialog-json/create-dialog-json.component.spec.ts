import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDialogJsonComponent } from './create-dialog-json.component';

describe('CreateDialogJsonComponent', () => {
  let component: CreateDialogJsonComponent;
  let fixture: ComponentFixture<CreateDialogJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDialogJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDialogJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
