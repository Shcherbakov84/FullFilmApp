import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {FilmService} from '../../shared/film.service';

@Component({
  selector: 'detailed-filminfo',
  templateUrl: './detailed-filminfo.component.html',
  styleUrls: ['./detailed-filminfo.component.css']
})
export class DetailedFilminfoComponent implements OnInit {
   actorsFullList: any[];
   actorsShortList: any[];
   filmId;
   subscription: Subscription;
   filmDetails;
   posterSize: string = 'w500';
   actorImgSize: string = 'w185';

  constructor (private activateRoute: ActivatedRoute, private filmCardService: FilmService) {
    this.subscription = activateRoute.params.subscribe(params=>this.filmId=params['id']);
  }

  ngOnInit() {
    this.getFilmInfo();
    this.getActors();
  }

  getFilmInfo() {
    if(this.filmId) {
      this.filmCardService.getFilmById(this.filmId).subscribe( (filmInfo: Object) => {
        this.filmDetails = filmInfo || {};
      })
    };
  }

  getActorsShortList() {
    return (this.actorsFullList.length >= 5) ? this.actorsFullList.slice(0, 5) : this.actorsFullList;
  }

  getActors () {
    if(this.filmId) {   
      this.filmCardService.getActors(this.filmId).subscribe( (actorsList ) => {
        this.actorsFullList = actorsList.cast || [];
        this.actorsShortList = this.getActorsShortList();
      })
    };
  }
}
