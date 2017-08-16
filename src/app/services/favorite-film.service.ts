import { Injectable } from '@angular/core';

@Injectable()
export class FavoriteFilmService {

  idList: string[];

  constructor() { }

  getFavoriteFilms() {
    this.idList = Object.keys(localStorage); 
    return this.idList;  
  }

  setFavoriteFilm(filmId) {
    localStorage.setItem(filmId, filmId);
  }

  deleteFilmFromFavorites(filmId) {
    localStorage.removeItem(filmId);
  }
}
