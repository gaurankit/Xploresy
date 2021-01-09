import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ToursListComponent } from './tours-list/tours-list.component';
=======
import { SearchComponent } from './home/search.component'
>>>>>>> 48a1e5d0607834bbe2902fbe0996d330900ea07b

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ToursListComponent
=======
    SearchComponent
>>>>>>> 48a1e5d0607834bbe2902fbe0996d330900ea07b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
