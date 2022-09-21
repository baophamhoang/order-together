import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'aboutme', component: AboutmeComponent},
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '', pathMatch: 'full'},
  // { path: '', redirectTo: ''},
  // { path: 'aboutme'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
