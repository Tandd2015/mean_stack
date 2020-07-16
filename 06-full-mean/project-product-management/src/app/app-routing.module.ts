import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import * as fromProducts from './products';

import { environment } from '../environments/environment';
import { ProductService } from './services';
import { NotFoundComponent} from './not-found/not-found.component';
import { HomeMainComponent } from './home/home-main/home-main.component';


const enableTracing = false && !environment.production;


const routes: Routes = [
  {
    path: '',
    component: HomeMainComponent,
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: fromProducts.ProductListComponent,
      },
      {
        path: 'new',
        component: fromProducts.ProductNewComponent,
      },
      {
        path: ':id',
        component: fromProducts.ProductDetailComponent,
      },
      {
        path: 'edit/:id',
        component: fromProducts.ProductEditComponent,
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing,
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
