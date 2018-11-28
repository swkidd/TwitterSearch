import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainSearchComponent } from './main-search/main-search.component';

import {DecimalPipe} from "@angular/common";
import { SearchService } from "./service/search.service";
import { RouterModule, Routes} from "@angular/router";
import { MainMapComponent } from './main-map/main-map.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: MainSearchComponent },
  { path: 'map', component: MainMapComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainSearchComponent,
    MainMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [SearchService, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
