import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Excercice1Component } from './excercice1/excercice1.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Excercice2Component } from './excercice2/excercice2.component';
import { Excercice2Service } from './services/excercice2.service';

const appRoutes: Routes = [
  {path: 'excercice1', component:Excercice1Component},
  {path: 'excercice2', component:Excercice2Component},
];

@NgModule({
  declarations: [
    AppComponent,
    Excercice1Component,
    Excercice2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    Excercice2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
