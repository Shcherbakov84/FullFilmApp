import { Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { FilmListComponent } from "./films/film-list/film-list.component";
import { DetailedFilminfoComponent } from "./films/detailed-filminfo/detailed-filminfo.component";


export const ROUTES: Routes = [
    { path: "", redirectTo: "filmList", pathMatch: "full" },
    { path: "filmList",    component: FilmListComponent },  
    { path: "filmList/:id",   component: DetailedFilminfoComponent }
];


