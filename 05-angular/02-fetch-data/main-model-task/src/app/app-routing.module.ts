import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import * as fromTasks from './tasks';
import { environment } from '../environments/environment';
import { NotFoundComponent } from './not-found/not-found.component';

const enableTracing = false && !environment.production;

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    children: [
      {
        path: '',
        component: fromTasks.TaskListComponent,
      },
      {
        path: 'new',
        component: fromTasks.TaskAddNewComponent,
      },
      {
        path: ':id',
        component: fromTasks.TaskShowOneComponent,
      },
      {
        path: ':id/update',
        component: fromTasks.TaskUpdateOneComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing,
  }),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
