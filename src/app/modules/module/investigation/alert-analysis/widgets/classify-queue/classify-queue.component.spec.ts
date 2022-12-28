import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifyQueueComponent } from './classify-queue.component';

describe('ClassifyQueueComponent', () => {
  let component: ClassifyQueueComponent;
  let fixture: ComponentFixture<ClassifyQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassifyQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifyQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
