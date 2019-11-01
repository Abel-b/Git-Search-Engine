import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { HomeComponent} from './home/home.component';
import { RepoComponent } from './repo/repo.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'repo', component:RepoComponent},
  {path:'search-form', component: SearchFormComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
