import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDialogSchemeComponent } from './create-dialog-scheme.component';

describe('CreateDialogSchemeComponent', () => {
  let component: CreateDialogSchemeComponent;
  let fixture: ComponentFixture<CreateDialogSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDialogSchemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDialogSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
