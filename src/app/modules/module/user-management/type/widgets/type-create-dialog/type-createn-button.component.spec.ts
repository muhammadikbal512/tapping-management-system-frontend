import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCreateDialogComponent } from './type-create-dialog.component';

describe('TypeCreatedialogComponent', () => {
  let component: TypeCreateDialogComponent;
  let fixture: ComponentFixture<TypeCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeCreateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
