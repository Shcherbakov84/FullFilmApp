import { Component, OnInit } from '@angular/core';
import { FavoriteFilmService } from '../../services/favorite-film.service';

@Component({
  selector: 'favorite-films',
  templateUrl: './favorite-films.component.html',
  styleUrls: ['./favorite-films.component.css']
})
export class FavoriteFilmsComponent implements OnInit {
  idList: string[];

  constructor (private favoriteFilmService: FavoriteFilmService) { } 

  ngOnInit() {
    this.idList = this.favoriteFilmService.getFavoriteFilms();
  }

  isFilmListEmpty(): boolean {
    return this.idList && !this.idList.length;
  }
}
