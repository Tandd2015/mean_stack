import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as fromProducts from './products';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
@NgModule({
  declarations: [
    AppComponent,
    ...fromProducts.components,
    NotFoundComponent,
    NavBarComponent,
    HomeMainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
