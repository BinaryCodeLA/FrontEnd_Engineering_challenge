import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AboutComponent } from './component/about/about.component';
import { ConferenceComponent } from './component/conference/conference.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'about', component: AboutComponent, canActivate: [AuthGuard]},
  {path:'conference', component: ConferenceComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
