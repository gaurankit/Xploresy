import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './home/search.component';
import { LoaderComponent } from './home/loader.component';
import { ToursListComponent } from './tours-list/tours-list.component';
import { ToursDetailComponent } from './tours-detail/tours-detail.component';


const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'loading', component: LoaderComponent},
  {path: 'results', component: ToursListComponent} ,
  {path: 'detail/:id', component: ToursDetailComponent} ,
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
