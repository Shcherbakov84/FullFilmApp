import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FilmService } from '../../services/film.service';
import { FavoriteFilmService } from '../../services/favorite-film.service';
import { DetailedFilmInfo } from '../../models/detailed-film-info';
import { Actor } from '../../models/actor';

@Component({
  selector: 'detailed-filminfo',
  templateUrl: './detailed-filminfo.component.html',
  styleUrls: ['./detailed-filminfo.component.css']
})

export class DetailedFilminfoComponent implements OnInit {
   actorsFullList: Actor[];
   actorsShortList: Actor[];
   filmId;
   subscription: Subscription;
   filmDetails: object;
   posterSize: string = 'w500';
   actorImgSize: string = 'w185';
   color: 'green';
   isFavIconActive: boolean;
   favoritesList: string[];

  constructor (
    private activateRoute: ActivatedRoute, 
    private filmCardService: FilmService, 
    private favoriteFilmService: FavoriteFilmService
  ) {
    this.subscription = activateRoute.params.subscribe( params => this.filmId = params['id'] );
  }

  ngOnInit() {
    this.isFavIconActive = false;
    this.getFilmInfo();
    this.getActors();
  }

  getFilmInfo() {
    if(this.filmId) {
      this.filmCardService.getFilmById(this.filmId)
        .subscribe( (filmInfo: DetailedFilmInfo) => this.filmDetails = filmInfo || {} );
    };
  }

  getActorsShortList() {
    return (this.actorsFullList.length >= 5) ? this.actorsFullList.slice(0, 5) : this.actorsFullList;
  }

  getActors () {
    if(this.filmId) {   
      this.filmCardService.getActors(this.filmId)
        .subscribe( (actorsList) => {
          this.actorsFullList = actorsList.cast || [];
          this.actorsShortList = this.getActorsShortList();
        })
    };
  }

  saveToFavorites() {
    this.favoriteFilmService.setFavoriteFilm(this.filmId);
  }

  deleteFromFavorites() {
    this.favoriteFilmService.deleteFilmFromFavorites(this.filmId);
  } 

  toggleFavoriteFilm() {
    ( this.isInFavoriteList() ) ? this.deleteFromFavorites() : this.saveToFavorites();
  }

  isInFavoriteList():boolean {
    this.favoritesList = this.favoriteFilmService.getFavoriteFilms();
    return this.favoritesList.some( item => item == this.filmId );
  }
}
