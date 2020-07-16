import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import * as fromPets from './pets';
import { NotFoundComponent } from './not-found/not-found.component';

const enableTracing = false && !environment.production;
// const enableTracing = true && !environment.production; // to turn on all of thre router tracing computed logic

const routes: Routes = [
  // this way fixes the refresh page problem of your application
  {
    path: '', // Angular understands that all routes have the / so to compansate for that we actually ommit it
    redirectTo: 'pets', // any time you have a redirect to you need to pathMatch
    pathMatch: 'full',
  },
  {
    path: 'pets',
    children: [ // when ever you have children routes they each have to match the path first to access thier own route
      {
        path: '', // Angular understands that all routes have the / so to compansate for that we actually ommit it
        component: fromPets.PetListComponent,
      },
      {
        path: 'new',
        component: fromPets.PetNewComponent,
      },
      {
        path: ':id',
        component: fromPets.PetDetailComponent,
      },
      {
        path: ':id/edit',
        component: fromPets.PetEditComponent,
      },
    ]
  },
  {
    path: '**', // a path to a component that will handle all routes attempted but not valid to the application
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
