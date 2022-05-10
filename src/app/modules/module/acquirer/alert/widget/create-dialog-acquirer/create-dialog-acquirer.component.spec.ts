import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDialogAcquirerComponent } from './create-dialog-acquirer.component';

describe('CreateDialogAcquirerComponent', () => {
  let component: CreateDialogAcquirerComponent;
  let fixture: ComponentFixture<CreateDialogAcquirerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDialogAcquirerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDialogAcquirerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
