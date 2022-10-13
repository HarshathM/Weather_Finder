import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimateComponent } from './climate/climate.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'' ,redirectTo:'\login', pathMatch:'full' },
  {path:'\login' , component:LoginComponent},
  {path:'\climate', component:ClimateComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
