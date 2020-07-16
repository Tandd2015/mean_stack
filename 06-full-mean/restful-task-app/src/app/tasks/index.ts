import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { NavComponent } from '../nav/nav.component';

export const components: any[] = [TaskListComponent, TaskEditComponent, TaskDetailComponent, TaskNewComponent, NavComponent];

export * from './task-list/task-list.component';
export * from './task-edit/task-edit.component';
export * from './task-detail/task-detail.component';
export * from './task-new/task-new.component';
export * from '../nav/nav.component';
