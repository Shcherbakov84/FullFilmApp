import { Component, OnInit, Input } from '@angular/core';
import {FilmService} from '../../shared/film.service';


@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})

export class FilmCardComponent implements OnInit {
  @Input() filmId: number;
  filmItem: object;
  pictureSize: string = 'w342';

  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.getFilmInfo();
  }
  
  private getFilmInfo() {
    if(this.filmId) {
      this.filmCardService.getFilmById(this.filmId).subscribe( (filmInfo: object) => {
        this.filmItem = filmInfo || {};
      })
    }
  }
}
