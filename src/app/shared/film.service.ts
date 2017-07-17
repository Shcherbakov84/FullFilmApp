import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilmService {
  url: string = 'https://api.themoviedb.org';
  apiKey: string = '0077bec633f957fbf7cd91c9c7026b27';
  page: number = 1;
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

  getPopular() {
    return this.get(`${this.url}/3/movie/popular?page=1&language=${this.language}&api_key=${this.apiKey}`);
  }

  getPopularNextPage() {
    this.page++;
    return this.get(`${this.url}/3/movie/popular?page=${this.page}&language=${this.language}&api_key=${this.apiKey}`);
  }

  getActors(filmId: number) {
    return this.get(`${this.url}/3/movie/${filmId}/credits?language=${this.language}&api_key=${this.apiKey}`);
  }

}
 
