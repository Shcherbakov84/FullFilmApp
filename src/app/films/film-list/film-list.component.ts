import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../shared/film.service';

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

  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.selectedView = this.cardViews[0].value;
    this.filmList = [];
    this.getPopular();
  }

  isFilmListEmpty(): boolean {
    return this.filmList && !this.filmList.length;
  }

  isFilledArray(filmsArray: any): boolean {
    return filmsArray && filmsArray.length;
  }

  getFilmsBySearch(filmName: string) {
    this.filmCardService.getFilmsBySearch(filmName).subscribe( (filmsArray) => {
      this.filmList = ( this.isFilledArray(filmsArray) ) ? filmsArray : [];
    })
  }

  addPopularFilms() {
    this.filmCardService.getPopularNextPage().subscribe( (filmsList: object[] ) => {
      this.filmList.push(...filmsList);
    })
  }

  getPopular() {
    this.filmCardService.getPopular().subscribe( (filmsArray: object[] ) => {
      this.filmList = ( this.isFilledArray(filmsArray) ) ? filmsArray : [];
    })
  }
}
 