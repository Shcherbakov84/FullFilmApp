import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmTileComponent } from './film-tile.component';

describe('FilmTileComponent', () => {
  let component: FilmTileComponent;
  let fixture: ComponentFixture<FilmTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
