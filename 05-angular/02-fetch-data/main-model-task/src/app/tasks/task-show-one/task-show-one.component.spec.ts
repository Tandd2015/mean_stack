import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskShowOneComponent } from './task-show-one.component';

describe('TaskShowOneComponent', () => {
  let component: TaskShowOneComponent;
  let fixture: ComponentFixture<TaskShowOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskShowOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskShowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
