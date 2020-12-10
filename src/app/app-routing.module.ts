import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { LoginComponent} from '../app/login/login.component';
import { SignupComponent} from '../app/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeuserComponent } from './welcomeuser/welcomeuser.component';



const routes: Routes = [
  {path:'', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'welcome-user', component:WelcomeuserComponent},
  // {path: 'login', redirectTo:'dashboard', pathMatch:'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent,SignupComponent];
