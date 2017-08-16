import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { ViewTypeService } from '../../services/view-type.service';

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})

export class FilmListComponent implements OnInit {
  cardViews = [
    {value: 'card', viewValue: 'Film Card'},
    {value: 'tile', viewValue: 'Film Tile'}
  ];
  selectedView: string;
  filmList: any[];
  filmName: string; 
  searchedFilmsPage: number;
  popularFilmsPage: number;
  isFilmNameBySearch: boolean;

  constructor(private filmCardService: FilmService, private viewTypeService: ViewTypeService) { }

  ngOnInit() {
    this.popularFilmsPage = 1;
    this.searchedFilmsPage = 1;
    this.selectedView = this.viewTypeService.getTypeOfView();
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

  setTypeOfView() {
    this.viewTypeService.setTypeOfView(this.selectedView);
  }

  getFilmsBySearch(filmName: string) {
    this.filmCardService.getFilmsBySearch(filmName)
      .subscribe( (filmList) => this.filmList = ( this.isFilledArray(filmList) ) ? filmList : [] );
  }

  addFilms() {
    if (this.isFilmNameBySearch) {
      this.filmCardService.getFilmsBySearch(this.filmName, ++this.searchedFilmsPage)
        .subscribe( (filmList: any[]) => this.filmList.push(...filmList) );
    } else {
      this.filmCardService.getPopularFilms( ++this.popularFilmsPage )
        .subscribe( (filmList: any[]) => this.filmList.push(...filmList) );
    }
  }

  getPopularFilms() {
    this.filmCardService.getPopularFilms()
      .subscribe( (filmList: any[] ) => this.filmList = ( this.isFilledArray(filmList) ) ? filmList : [] );
  }

  buildGalleryBySearch(filmName: string) {
    this.filmName = filmName;
    this.searchedFilmsPage = 1;
    this.getFilmsBySearch(this.filmName);
    this.isFilmNameBySearch = true;
  }
}

 
 