import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

// Componentes
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudioComponent } from './studio/studio.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'studio', component: StudioComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})


export class AppRouting {}



