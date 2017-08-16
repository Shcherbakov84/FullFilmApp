import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
// import { FlexLayoutModule } from "@angular/flex-layout";

import { ROUTES } from "./app.routes";
import { AppComponent } from './app.component';
import { FilmCardComponent } from './films/film-card/film-card.component';
import { FilmListComponent } from './films/film-list/film-list.component';
import { FilmSearchComponent } from './films/film-search/film-search.component';
import { FilmTileComponent } from './films/film-tile/film-tile.component';
import { DetailedFilminfoComponent } from './films/detailed-filminfo/detailed-filminfo.component';
import { FavoriteFilmsComponent } from './films/favorite-films/favorite-films.component';

import { FilmService } from './services/film.service';
import { SendingInfoService } from './services/sendingInfo.service';
import { ViewTypeService } from './services/view-type.service';
import { FavoriteFilmService } from './services/favorite-film.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    FilmListComponent,
    FilmSearchComponent,
    FilmTileComponent,
    DetailedFilminfoComponent,
    FavoriteFilmsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    // FlexLayoutModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [FilmService, SendingInfoService, ViewTypeService, FavoriteFilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
