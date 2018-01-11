import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRouting } from './app.routing';

import { StudioModule } from './studio/studio.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    StudioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
