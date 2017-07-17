import { Component, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})

export class FilmSearchComponent {
  filmName: string = '';

  @Output()
  searchEvent: EventEmitter<string> = new EventEmitter();

  getFilms() {
    this.searchEvent.emit(this.filmName); 
  }
}
