import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToursListComponent } from './tours-list/tours-list.component';


const routes: Routes = [{path: 'tours-list', component: ToursListComponent},
{path: '', redirectTo: '/tours-list', pathMatch: 'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
