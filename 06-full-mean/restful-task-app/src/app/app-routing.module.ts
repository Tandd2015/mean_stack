import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import * as fromTasks from './tasks';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

const enableTracing = false && !environment.production;
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'tasks',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'tasks',
  //   children: [
  //     {
  //       path: '',
  //       component: fromTasks.TaskListComponent,
  //     },
  //     {
  //       path: 'new',
  //       component: fromTasks.TaskNewComponent,
  //     },
  //     {
  //       path: ':id',
  //       component: fromTasks.TaskDetailComponent,
  //     },
  //     {
  //       path: ':id/edit',
  //       component: fromTasks.TaskEditComponent,
  //     },
  //   ]
  // },
  {
    path: '',
    redirectTo: 'taskz',
    pathMatch: 'full',
  },
  {
    path: 'taskz',
    children: [
      {
        path: '',
        component: AppComponent,
      },
      {
        path: 'new',
        component: AppComponent,
      },
      {
        path: ':id',
        component: AppComponent,
      },
      {
        path: ':id/edit',
        component: AppComponent,
      },
    ]
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
        component: fromTasks.TaskNewComponent,
      },
      {
        path: ':id',
        component: fromTasks.TaskDetailComponent,
      },
      {
        path: ':id/edit',
        component: fromTasks.TaskEditComponent,
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing,
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
