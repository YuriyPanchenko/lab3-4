import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule, Routes} from "@angular/router";
import { TrainComponent } from './train/train.component';

const appRoutes: Routes = [
  {path: 'passengers', component: PassengerComponent},
  {path: 'trains', component: TrainComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    NavbarComponent,
    TrainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
