import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddNewComponent } from './task-add-new.component';

describe('TaskAddNewComponent', () => {
  let component: TaskAddNewComponent;
  let fixture: ComponentFixture<TaskAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
