import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtisteComponent } from './components/artiste/artiste.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CardsComponent } from './components/share/cards/cards.component';
import { LoadingComponent } from './components/share/loading/loading.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { UrlPipe } from './pipes/url.pipe';
import { ImagePipe } from './pipes/image.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ArtisteComponent,
    HomeComponent,
    SearchComponent,
    CardsComponent,
    LoadingComponent,
    NavbarComponent,
    UrlPipe,
    ImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
