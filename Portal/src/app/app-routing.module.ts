import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './home/search.component';
import { ToursListComponent } from './tours-list/tours-list.component';


const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'results', component: ToursListComponent},
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
