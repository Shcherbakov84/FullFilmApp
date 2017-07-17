import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Film Application Angular2';

  links: Object[] = [
    { path: '/filmList', icon: 'home', label: 'Главная'},
    { path: '/filmList/:id', icon: 'movie', label: 'Детальнее о фильме'},
    { path: '/profile', icon: 'account_circle', label: 'Профиль'}
  ];
}

