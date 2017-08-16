import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Film Application Angular2';

  links: object[] = [
    { path: 'filmList', icon: 'home', label: 'Главная'},
    { path: 'favorites', icon: 'favorite', label: 'Избранное'}
    //{ path: 'filmList/:id', icon: 'movie', label: 'Детальнее о фильме'},
    // { path: 'login', icon: 'account_circle', label: 'Войти'}
  ];
}

