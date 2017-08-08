import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilmService {
  url: string = 'https://api.themoviedb.org';
  apiKey: string = '0077bec633f957fbf7cd91c9c7026b27';
  popularFilmspage: number = 1;
  searchedFilmsPage: number = 1;
  language: string = 'ru-RU';
  
  constructor(private http: Http) { }

  private extract(res: Response) {
    let body = res.json();
    body = body.results || body;
    return body || {};
  }

  get(url: string): Observable<any> {
    return this.http.get(url).map(this.extract);
  }

  getFilmsBySearch(filmname: string) {
    return this.get(`${this.url}/3/search/movie?page=1&language=${this.language}&api_key=${this.apiKey}&query=${filmname}`);
  }

  getFilmById(filmId: number) {
    return this.get(`${this.url}/3/movie/${filmId}?language=${this.language}&api_key=${this.apiKey}`);
  }

  getPopularFilms() {
    return this.get(`${this.url}/3/movie/popular?page=1&language=${this.language}&api_key=${this.apiKey}`);
  }

  getNextPopularFilms() {
    this.popularFilmspage++;
    return this.get(`${this.url}/3/movie/popular?page=${this.popularFilmspage}&language=${this.language}&api_key=${this.apiKey}`);
  }

  getNextSearchedFilms(filmname: string) {
    this.searchedFilmsPage++;
    return this.get(`${this.url}/3/search/movie?page=${this.searchedFilmsPage}&language=${this.language}&api_key=${this.apiKey}&query=${filmname}`);
  }

  getActors(filmId: number) {
    return this.get(`${this.url}/3/movie/${filmId}/credits?language=${this.language}&api_key=${this.apiKey}`);
  }

}
 
