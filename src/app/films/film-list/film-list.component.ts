import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../shared/film.service';

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})

export class FilmListComponent implements OnInit {
  cardViews = [
    {value: 'view1', viewValue: 'Film Card'},
    {value: 'view2', viewValue: 'Film Tile'}
  ];
  selectedView: string;
  filmList: object[];
  filmName: string; 
  isFilmNameBySearch: boolean;

  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.selectedView = this.cardViews[0].value;
    this.isFilmNameBySearch = false;
    this.filmList = [];
    this.getPopularFilms();

  }

  isFilmListEmpty(): boolean {
    return this.filmList && !this.filmList.length;
  }

  isFilledArray(filmsArray: any): boolean {
    return filmsArray && filmsArray.length;
  }

  getFilmsBySearch(filmName: string) {
    this.filmCardService.getFilmsBySearch(filmName)
      .subscribe( (filmsArray) => this.filmList = ( this.isFilledArray(filmsArray) ) ? filmsArray : [] );
  }

  addFilms() {
    if (this.isFilmNameBySearch) {
      this.filmCardService.getNextSearchedFilms(this.filmName)
        .subscribe( (filmsList: object[]) => this.filmList.push(...filmsList) );
    } else {
      this.filmCardService.getNextPopularFilms()
        .subscribe( (filmsList: object[]) => this.filmList.push(...filmsList) );
    }
  }

  getPopularFilms() {
    this.filmCardService.getPopularFilms()
      .subscribe( (filmsArray: object[] ) => this.filmList = ( this.isFilledArray(filmsArray) ) ? filmsArray : [] )
  }

  buildGalleryBySearch(filmName: string) {
    this.filmName = filmName;
    this.getFilmsBySearch(this.filmName);
    this.isFilmNameBySearch = true;
    this.filmCardService.searchedFilmsPage = 1;
  }
}
 