import { TestBed, inject } from '@angular/core/testing';

import { FavoriteFilmService } from './favorite-film.service';

describe('FavoriteFilmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoriteFilmService]
    });
  });

  it('should ...', inject([FavoriteFilmService], (service: FavoriteFilmService) => {
    expect(service).toBeTruthy();
  }));
});
