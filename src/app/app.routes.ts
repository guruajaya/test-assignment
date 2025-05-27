import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListproductComponent } from './component/listproduct/listproduct.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './component/about/about.component';
import { AddComponent } from './component/add/add.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirect to home
  { path: '', component: HomeComponent },  // Define the home path
  { path: 'about', component: AboutComponent },
  { path: 'addlist', component: AddComponent },

]
