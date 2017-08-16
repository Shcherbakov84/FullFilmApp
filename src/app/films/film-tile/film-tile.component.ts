import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { FilmInfo } from '../../models/film-info';
import { FavoriteFilmService } from '../../services/favorite-film.service';

@Component({
  selector: 'film-tile',
  templateUrl: './film-tile.component.html',
  styleUrls: ['./film-tile.component.css']
})

export class FilmTileComponent implements OnInit {
  @Input() filmId: number;
  filmItem: object;
  pictureSize: string = 'w342';
  favoritesList: any[];

  constructor(private filmCardService: FilmService, private favoriteFilmService: FavoriteFilmService) { }

  ngOnInit() {
    this.getFilmInfo();
    this.favoritesList = this.favoriteFilmService.getFavoriteFilms();
  }
  
  private getFilmInfo() {
    if(this.filmId) {
      this.filmCardService.getFilmById(this.filmId)
        .subscribe( (filmInfo: FilmInfo) => this.filmItem = filmInfo || {} )
    }
  }

  isFilmFavorite():boolean {
    return this.favoritesList.some( item => item == this.filmId )
  }
}
