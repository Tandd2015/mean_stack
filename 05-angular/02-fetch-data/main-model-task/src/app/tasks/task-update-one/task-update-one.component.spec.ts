import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUpdateOneComponent } from './task-update-one.component';

describe('TaskUpdateOneComponent', () => {
  let component: TaskUpdateOneComponent;
  let fixture: ComponentFixture<TaskUpdateOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskUpdateOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskUpdateOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
