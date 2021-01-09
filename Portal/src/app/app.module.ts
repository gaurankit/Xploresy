import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToursListComponent } from './tours-list/tours-list.component';
import { SearchComponent } from './home/search.component';

import {DemoMaterialModule} from './tours-list/material-module';


@NgModule({
  declarations: [
    AppComponent,
    ToursListComponent,
    SearchComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
