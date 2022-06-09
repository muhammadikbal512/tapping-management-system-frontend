import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDialogXmlComponent } from './create-dialog-xml.component';

describe('CreateDialogXmlComponent', () => {
  let component: CreateDialogXmlComponent;
  let fixture: ComponentFixture<CreateDialogXmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDialogXmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDialogXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
